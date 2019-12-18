import React from "react"
import { fetchItem, fetchComments} from '../../utils/api'
import queryString from 'query-string'
import PostInfo from '../PostInfo'
import Comment from '../Comment'

import * as Style from "./styled"


class Post extends React.Component {
  state = {
    post: null,
    comments: null,
    loadingPost: true,
    loadingComments: true,
    error: null
  }
  
  componentDidMount () {

    const { id } = queryString.parse(this.props.location.search)

    fetchItem(id)
    .then((post) => {
      this.setState({post, loadingPost : false })
      return fetchComments(post.kids)
    })
    .then((comments => {
      this.setState({comments, loadingComments : false })
    }))
    .catch(({ message }) => this.setState({
      error: message,
      loading: false
    }))

  }

  render() {

    const { post, comments, error, loadingPost, loadingComments } = this.state

    if (error) {
      return <p>{error}</p>
    }
    console.log(post)
    return (
      <Style.PostWrapper>
      
        {loadingPost === true 
          ? <p>Loading...</p> 
          : 
              <> 
                <Style.PostTitle>{post.title}</Style.PostTitle>
                <PostInfo id={post.id} author={post.by} time={post.time} comments={post.descendants}/>
              </>
        }

        {loadingComments === true 
          ? <p>Loading...</p> 
          : 
          comments.map((comment) =>
            <Comment
              key={comment.id}
              comment={comment}
            />
          )
        }

        </Style.PostWrapper>
    )
    
  }

}

export default Post