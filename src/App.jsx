import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getdata();
  }, [])

  const getdata = async () => {
    try {
      // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      // const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false';

      const res = await axios.get(`https://rest.coinapi.io/v1/exchangerate/INR`, {
        headers: {
          'Accept': 'text/plain',
          'X-CoinAPI-Key': 'D15D3141-9C4B-499E-9500-FD388E4BA858'
        }
      })
      setCoins(res.data.rates)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    typeof coin.asset_id_quote === 'string' && coin.asset_id_quote.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <form action="">
          <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange} />

        </form>

      </div>
      {filteredCoins.map((coin, index) => {
        return (
          <Coin
            key={index}
            name={coin.asset_id_quote}
            price={coin.rate}
          />
        );
      })}


    </div>
  );
}

export default App;