const GifItem = (props) => {
  const { url, id } = props
  return (
    <div className="card-image">
      <img className="img-gif" src={url} alt={id} />
    </div>
  )
}

export default GifItem