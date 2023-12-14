// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <ul className="nav-menu background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="size"
      />
      <h1>Wave</h1>
      <li className="margin">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link margin1">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link margin1">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
