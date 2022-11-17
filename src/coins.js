import { useEffect, useState } from "react";

function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
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
      <h1>Coins</h1>
      {loading ? <strong>loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li style={{ margin: 5 }} key={coin.id}>
            <strong>
              {coin.name} ({coin.symbol}){" "}
            </strong>{" "}
            : {coin.quotes.USD.price} (USD) / {coin.quotes.USD.price * 1340.24}{" "}
            (KRW)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coins;
