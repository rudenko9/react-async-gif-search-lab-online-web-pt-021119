import React from 'react'

//child of giflistcontainer
const GifList = props => {
  console.log(props);

  return (
    <div>

    {props.totalGifs.map(gif => <img key={gif.url} src={gif.url} alt='gif'/>)}

    </div>
  )
}

export default GifList
