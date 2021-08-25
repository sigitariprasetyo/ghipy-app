import Routers from './config/routes'
import GiphyDataProvider from './context/giphyContext'
import './global.css';

function App() {
  return (
    <div className="container">
      <GiphyDataProvider>
        <Routers />
      </GiphyDataProvider>
    </div>
  );
}

export default App;