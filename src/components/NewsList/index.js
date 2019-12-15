import React from "react"

import { fetchMainPosts } from '../../utils/api'

import * as Style from "./styled"

function StatusNav ({ selected, onUpdateStatus}) {
  const status = ['Top', 'New']
  return (
    <Style.NavWrapper>
      <Style.Ul>
      {status.map((status) => (
        <li key={status} 
          className={ status === selected ? 'selected' : null}
          onClick={() => onUpdateStatus(status)}>
          {status}
        </li>
      ))}
      </Style.Ul>
    </Style.NavWrapper>
  )
}

class NewsList extends React.Component {
  
  state = {
    selectedStatus: 'Top',
    newsList: null,
    error: null
  }

  componentDidMount () {
     fetchMainPosts('top')
     .then((data) => {
       console.log(data)
       this.setState({
         newsList: data
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
    const { selectedStatus, newsList } = this.state

    return (
      <>
        <StatusNav selected={selectedStatus} onUpdateStatus={this.updateStatus}/>
        <Style.NewsWrapper >
        { 
          newsList && 
          newsList.map((news, index) => {
            const numberOfComments = news.hasOwnProperty("kids") ? news.kids.length : '0'
            return (
                <Style.CardWrapper key={index}>
                  <Style.Ranking>{index + 1}</Style.Ranking>
                  <h3> <a href="/">{news.title}</a> </h3>
                    <p>by <a href="/"> <b>{news.by}</b></a> on 12/11/2019, 8:59 AM • <a href="/"><b>{numberOfComments}</b> comments</a></p>
                </Style.CardWrapper>
            )
          })
        }
        
        </Style.NewsWrapper>
      </>
    )
  }
}

export default NewsList
  