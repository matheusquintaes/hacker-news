import React from "react"
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../../utils/api'
import PostsList from '../PostsList'

class Posts extends React.Component {
  
  state = {
    posts: null,
    loading: true,
    error: null
  }

  componentDidMount () {
    this.handleFetch()
  }

  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.handleFetch(this.props.type);
    }
  }

  handleFetch () {
    this.setState({
      posts: null,
      error: null,
      loading: true
    })

    fetchMainPosts(this.props.type)
    .then((data) => {
      this.setState({
       posts: data,
       loading: false,
       error: null
      })
    }).catch(({ message }) => this.setState({
      error: message,
      loading: false
    }))

  }
  render() {
    const { posts, error, loading } = this.state

    if (loading === true) {
      return <p>Loading</p> 
    }

    if (error) {
      return <p className='center-text error'>{error}</p>
    }

    return <PostsList posts={posts} type={this.props.type} />
  }
}

export default Posts
  
Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}