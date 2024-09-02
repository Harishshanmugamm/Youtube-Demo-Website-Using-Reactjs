import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="content-container p-4">
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}

export default App;



