import React from "react"
import PostsList from '../PostsList'
import { fetchPosts, fetchUser} from '../../utils/api'
import queryString from 'query-string'

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

    return(
      <>
        {!loadingUser && 
          <Style.UserWrapper>
            <Style.UserInfos>
              <h3>{user.id}</h3>     
              <p>joined 10/8/2017</p>
              <p dangerouslySetInnerHTML={{__html: user.about}}/> 
            </Style.UserInfos>
            <Style.UserKarma>
                <p>KARMA POINTS </p> 
                <h4>{user.karma}</h4>
            </Style.UserKarma>
          </Style.UserWrapper>
        }
        {!loadingPosts &&  <PostsList posts={posts}/>}
      </>
    )
  }

}

export default User