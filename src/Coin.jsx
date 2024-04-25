import React from 'react'
import './Coin.css'

const Coin = ({name, price}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <h1>{name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs.{price.toFixed(3)}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin