import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className="Main p-3 m-2">
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <div className='container d-flex justify-content-between align-items-center'>
                    <h1>Artista Populares</h1>
                    <a href='/'>mostrar mais</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main