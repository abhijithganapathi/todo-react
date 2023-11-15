import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link to="/todo-react/">Home</Link>
        <Link to="/todo-react/about/">About</Link>
    </header>
  )
}

export default Header