import './App.css';
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
  <WeatherApp defaultCity="London" />
  <div>
    <Footer />
    </div>
    </div>
  );
}

export default App;
