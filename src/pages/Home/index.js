import { Link } from "react-router-dom";
import logo from '../../giphy.png';

function Home() {
  return (
    <div className="container">
      <h1 style={{ marginTop: -80 }}>WECOME TO YOUR GIPHY</h1>
      <div className="box-img">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <Link className="link" to="/iron-giphy">IRON MAN GIPHY</Link>
      <Link className="link" to="/search-giphy">SEARCH YOUR GIPHY</Link>
    </div>
  );
}

export default Home;