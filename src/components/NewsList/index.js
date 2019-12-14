import React from "react"

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
    newsList: {},
    error: null
  }

  updateStatus = (selectedStatus) => {
    this.setState({
      selectedStatus,
      error: null,
    })
  }

  render() {
    const { selectedStatus } = this.state

    return (
      <>
        <StatusNav selected={selectedStatus} onUpdateStatus={this.updateStatus}/>
        <Style.NewsWrapper>
          <Style.CardWrapper>
            <Style.Ranking>1</Style.Ranking>
            <h3> <a href="/">Things end users care about but programmers don't</a> </h3>
               <p>by <a href="/"> <b>pmarin</b></a> on 12/11/2019, 8:59 AM • <a href="/"><b>85</b> comments</a></p>
          </Style.CardWrapper>
        </Style.NewsWrapper>
      </>
    )
  }
}

export default NewsList
  