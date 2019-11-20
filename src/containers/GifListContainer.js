import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    totalGifs: []
  }

render() {
  return(
    <div>
    <GifSearch fetching={this.fetching} />
    <GifList totalGifs={this.state.totalGifs} />
    </div>
  )
}

fetching = (query = 'dolphins') => {
  fetch('https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3')
  .then(res => res.json())
  .then(({data}) => {
    this.setState({
      totalGifs: data.map(gif => ({url: gif.images.original.url}))
    })
  })
}

componentDidMount() {
  this.fetching()
}

}
export default GifListContainer
