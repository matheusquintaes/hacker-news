import React from "react"
import PostInfo from '../PostInfo'
import * as Style from "./styled"

function PostList ( {posts, type} ) {
  return (
    <Style.PostsWrapper >
      { posts && posts.map((post, index) => {
          return (
            <Style.CardWrapper key={index}>
                { type === 'top' && <Style.Ranking>{index + 1}</Style.Ranking> } 
                <h3> <a href={post.url}>{post.title}</a> </h3>
                <PostInfo author={post.by} time={post.time} comments={post.descendants} />
            </Style.CardWrapper>
          )
        })
      }
    </Style.PostsWrapper>
  )
}

export default PostList