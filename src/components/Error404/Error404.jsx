import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom'
import '../Error404/Error404.scss'

function Error404() {
  return (
    <div>
        <h1 className="error-title">ERROR 404</h1>
        <p className="error-text">Lo sentimos pero lo que sea que estes buscando no se encuentra aqui. Por favor vuelve a nuestra pagina principal clickeando el boton de abajo</p>
        <Link to= '/' className="error-link" >
          <button className="error-button">
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <h2 className="error-button-text">Ir a la pagina</h2>
          </button>
        </Link>
    </div>
  )
}

export default Error404