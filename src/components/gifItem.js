const GifItem = (props) => {
  const { url } = props
  return (
    <div className="card-image">
      <img className="img-gif" src={url} alt="gif" />
    </div>
  )
}

export default GifItem