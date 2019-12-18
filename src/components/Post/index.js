import React from "react"
import PostsList from '../PostsList'
import { fetchPosts, fetchUser} from '../../utils/api'
import queryString from 'query-string'
import { formatDate } from '../../utils/helpers'

import * as Style from "./styled"


class Post extends React.Component {
  state = {

  }
  
  componentDidMount () {
  }

  render() {
      return <p>Post</p>
    
  }

}

export default Post