import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import SearchIcon from "./images/search-icon.png";

export default function App() {
  return (
    <main>
      <Header />
      <Welcome />
      <div className="main-content">
        <div className="search-bar">
          <img src={SearchIcon} />
          <input type="text" placeholder="search for a city..." />
        </div>
      </div>
    </main>
  );
}
