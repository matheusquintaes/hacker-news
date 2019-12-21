import React from "react"
import PostsList from '../PostsList'
import { fetchPosts, fetchUser} from '../../utils/api'
import queryString from 'query-string'
import { formatDate } from '../../utils/helpers'
import Loading from '../Loading'

import * as Style from "./styled"


class User extends React.Component {
  state = {
    posts: null,
    user: null,
    loadingUser: true,
    loadingPosts: true,
    error: null
  }
  
  componentDidMount () {
    const { id } = queryString.parse(this.props.location.search)

    fetchUser(id)
      .then((user) => { 
        this.setState({ user, loadingUser: false })
        return fetchPosts(user.submitted.slice(0, 30))
      })
      .then((posts) => {
        this.setState({ posts, loadingPosts: false })
      })
  }

  render() {
    const { user, posts, error, loadingUser, loadingPosts} = this.state
    
    if (error) {
      return <p>{error}</p>
    }
    return(
      <>
      
        {loadingUser === true 
          ? <Loading/>
          : <Style.UserWrapper>
              <Style.UserInfos>
                <h3>{user.id}</h3>     
                <p>joined <b>{formatDate(user.created)}</b></p>
                <p dangerouslySetInnerHTML={{__html: user.about}}/> 
              </Style.UserInfos>
              <Style.UserKarma>
                  <p>KARMA POINTS </p> 
                  <h4>{user.karma}</h4>
              </Style.UserKarma>
            </Style.UserWrapper>
        }
        {loadingPosts === true 
          ? <Loading/>
          : <>
              <Style.TitlePosts>Last Posts</Style.TitlePosts>
              <PostsList posts={posts}/>
            </>
          }
      </>
    )
  }

}

export default User