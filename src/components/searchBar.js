import { useGiphyData } from "../context/giphyContext";

const SearchBar = () => {
  const { keysearch, setKeysearch } = useGiphyData()

  return (
    <div className="box-search">
      <input
        className="input-text"
        value={keysearch}
        onChange={e => setKeysearch(e.target.value)}
        type="text"
        placeholder="Search Giphy" />
    </div>
  )
}

export default SearchBar