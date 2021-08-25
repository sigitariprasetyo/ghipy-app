import { useGiphyData } from "../../context/giphyContext";
import SearchBar from "../../components/searchBar"
import GifList from "../../components/gifList";
import Loading from "../../components/loading";

const SerachGiphy = () => {
  const { data, loading } = useGiphyData()
  return (
    <div className="page-search-container">
      <h2>SEARCH YOUR GIPHY</h2>
      <SearchBar />
      {loading ? <Loading /> : null}
      {data.length > 0 ? <GifList data={data} /> : null}
    </div>
  )
}

export default SerachGiphy