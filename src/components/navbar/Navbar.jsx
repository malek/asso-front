import { NavLink } from "react-router-dom"
import logoAsso from "../../assets/Logo_noir.png"; // Make sure to provide the correct path
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
    <img src={logoAsso} alt="AssoShare Icon" width={80} height={80} />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/candidat">Candidat</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/association">Association</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar