import React from "react"
import { fetchItem, fetchComments} from '../../utils/api'
import queryString from 'query-string'
import PostInfo from '../PostInfo'
import Comment from '../Comment'
import { removeDeleted } from '../../utils/helpers'
import Loading from '../Loading'

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
    .then((Allcomments) => {
      const comments = removeDeleted(Allcomments)
      this.setState({comments, loadingComments : false })
    })
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
    return (
      <>
      <Style.PostWrapper>
      
        {loadingPost === true 
          ? <Loading/>
          : 
              <> 
                <Style.PostTitle><a target="_blank" rel="noopener noreferrer" href={post.url}>{post.title}</a></Style.PostTitle>
                <PostInfo id={post.id} author={post.by} time={post.time} comments={post.descendants}/>
              </>
        }
      </Style.PostWrapper>

        {loadingComments === true 
          ? <Loading/> 
          : 
          <>
            <Style.CommentsTitle>Main Comments</Style.CommentsTitle>
            {comments && 
              comments.map((comment) =>
                <Comment
                  key={comment.id}
                  comment={comment}
                />
              )
            }
          </>
        }

      </>
    )
    
  }

}

export default Post