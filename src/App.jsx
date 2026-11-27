import "./App.css";
import Header from "./components/Header"

export default function App() {
  return (
    <main>
      <Header />
      <div className="main-content">
        <input className="search-bar" type="text" placeholder="search for a city..."/>
      </div>
    </main>
  );
}
