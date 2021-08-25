import GifItem from "./gifItem";

const GifList = (props) => {
  const { data } = props

  return (
    <div className="giflist-box-content">
      {
        data.map((el, i) => {
          return <GifItem key={i} url={el} />
        })
      }
    </div>
  )
}

export default GifList