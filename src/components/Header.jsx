import favicon from "../images/favicon.png";
import "../App.css";

export default function Header() {
  return (
    <header>
      <div className="brand">
        <img className="brand-icon" src={favicon} />
        <p>clime.</p>
      </div>
    </header>
  );
}
