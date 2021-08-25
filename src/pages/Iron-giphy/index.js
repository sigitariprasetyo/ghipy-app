import { useGiphyData } from "../../contex/giphyContex";

const IronGiphy = () => {
  const { ironGiphy } = useGiphyData()
  return (
    <div className="ironman-giphy-container">
      <h1>IRON MAN GIPHY</h1>
    </div>
  )
}

export default IronGiphy