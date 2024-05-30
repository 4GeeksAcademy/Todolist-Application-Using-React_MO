import React from 'react'

const Card = ({titulo,imagen,contenido}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{contenido}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Card;