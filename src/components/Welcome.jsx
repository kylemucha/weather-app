import favicon from "../images/favicon.png";

export default function Welcome() {
  return (
    <div className="welcome-message">
      <div className="welcome-message-header">
        <p>Welcome to</p>
        <img src={favicon} />
        <p className="welcome-message-brand">clime.</p>
      </div>
      <p className="welcome-message-body">check the weather with aura</p>
      <p className="welcome-message-footer">search for your city to get started.</p>
    </div>
  );
}
