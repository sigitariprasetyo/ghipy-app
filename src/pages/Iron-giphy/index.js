import { Link } from "react-router-dom";
import { useGiphyData } from "../../context/giphyContext";
import GifList from "../../components/gifList"

const IronGiphy = () => {
  const { ironGiphy } = useGiphyData()

  return (
    <div className="ironman-giphy-container">
      <Link className="link" to="/">HOME</Link>
      <h1 style={{ marginTop: 10 }}>IRON MAN GIPHY</h1>
      <GifList data={ironGiphy} />
    </div>
  )
}

export default IronGiphy