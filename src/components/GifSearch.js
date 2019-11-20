import React from 'react'

class GifSearch extends React.Component {

state = {
  query: ""
}

handleSubmit = event => {
  event.preventDefault()
    this.props.fetching(this.state.query)
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
    <label>Enter your search here </label>
    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
    <button type="submit">Search</button>
    </form>
  )
}
}
export default GifSearch
