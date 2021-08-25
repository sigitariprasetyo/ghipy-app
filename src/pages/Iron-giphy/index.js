import { useGiphyData } from "../../context/giphyContext";
import GifList from "../../components/gifList"

const IronGiphy = () => {
  const { ironGiphy } = useGiphyData()

  return (
    <div className="ironman-giphy-container">
      <h1>IRON MAN GIPHY</h1>
      <GifList data={ironGiphy} />
    </div>
  )
}

export default IronGiphy