import { NavLink } from "react-router-dom"
import './PageNotFound.css'

function PageNotFound() {
  return (
    <>
        <h1 className='error404'>404</h1>
        <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <p>Retournez à l'<NavLink to="/">accueil</NavLink>.</p>
    </>
  )
}

export default PageNotFound
