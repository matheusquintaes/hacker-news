import React from "react"
import PostsList from '../PostsList'

import { fetchMainPosts } from '../../utils/api'

class Posts extends React.Component {
  
  state = {
    selectedStatus: 'Top',
    posts: null,
    error: null
  }

  componentDidMount () {
     fetchMainPosts('top')
     .then((data) => {
       console.log(data)
       this.setState({
        posts: data
       })
     })
  }

  updateStatus = (selectedStatus) => {
    this.setState({
      selectedStatus,
      error: null,
    })
  }

  render() {
    const { posts } = this.state

    return (
      <>
        <PostsList posts={posts} />
      </>
    )
  }
}

export default Posts
  