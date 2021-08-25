import GifItem from "./gifItem";

const GifList = (props) => {
  const { data } = props

  return (
    <div className="ironman-box-content">
      {
        data.map((el, i) => {
          return <GifItem key={i} id={el.id} url={el.url} />
        })
      }
    </div>
  )
}

export default GifList