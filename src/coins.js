import { useEffect, useState } from "react";
import "./coins.css";

function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      }, []);
  });

  return (
    <div id="coins">
      <div id="funds">
        <label>i have </label>
        <input id="dollar" placeholder="enter your money($)"></input>
        <label> dollars</label>
        <br />
        <label>as KRW </label>
        <input placeholder="enter your money(₩)" id="krw"></input>
        <label> won</label>
      </div>
      <div id="coinHead">
        <h1>Coins{loading ? "" : `(${coins.length})`}</h1>
      </div>
      <div id="coinList">
        {loading ? (
          <strong>loading...</strong>
        ) : (
          <select style={{ backgroundColor: "#333651" }}>
            <option>choose coin</option>
            {coins.map((coin) => (
              <option style={{ margin: 5 }} key={coin.id}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} (USD) /{" "}
                {coin.quotes.USD.price * 1340.24} (KRW)
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default Coins;
