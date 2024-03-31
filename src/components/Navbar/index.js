import "./index.css";
const Navbar = () => (
  <div className="navbar-bg">
    <div className="navbar-logo">
      <h1 className="logo">BookUsNow</h1>

      <button className="sign-but">SignIn</button>
    </div>
    <div className="navbar-location">
      <h4 className="nav-tag">Mumbai,India</h4>
      <h4 className="nav-tag">Live shows</h4>
      <h4 className="nav-tag">Streams</h4>
      <h4 className="nav-tag">Movies</h4>
      <h4 className="nav-tag">Plays</h4>
      <h4 className="nav-tag">Events</h4>
      <h4 className="nav-tag">Sports</h4>
      <h4 className="nav-tag">Activities</h4>
    </div>
  </div>
);

export default Navbar;
