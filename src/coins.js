import { useEffect, useState } from "react";
import "./coins.css";
function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [disable, setDisable] = useState(false);

  /*
  ex)
  name: bitcoin
  symbol: btc
  quoted.pirce.USD: 
  */

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      }, []);
  });
  //const ranked9 = coins.slice(0, 8);
  const reset = () => setMoney(0);
  const onChange = (event) => {
    setMoney(() => event.target.value);
  };
  const invert = () => {
    setDisable((prev) => !prev);
    reset();
  };
  //
  const setEmpty = () => {
    if (money === 0) {
      setMoney("");
    }
  };

  const demical = money / 1300;
  const fixed = demical.toFixed(2);

  return (
    <div id="coins">
      <div id="funds">
        <label>i have </label>
        <input
          disabled={disable}
          value={disable ? fixed : money}
          onChange={onChange}
          id="dollar"
          placeholder="enter your money($)"
          type="number"
          onClick={setEmpty}
        ></input>
        <label> dollars</label>
        <br />
        <label>as KRW </label>
        <input
          disabled={!disable}
          onChange={onChange}
          value={disable ? money : money * 1300}
          //1달러 = 1300원으로 가정
          placeholder="enter your money(₩)"
          id="krw"
          type="number"
          onClick={setEmpty}
        ></input>
        <label> won</label>
        <br></br>
        <button onClick={invert}>$ ↔ ₩</button>
      </div>
      <div id="converterHead">
        <span>so i can buy....</span>
      </div>
      {loading ? (
        <strong>loading</strong>
      ) : (
        <div id="converterBox">
          <div id="tableBox">
            <table id="convertTable">
              <tbody>
                <tr>
                  <td>
                    <p>
                      <em></em>
                      <em>{coins[0].symbol}</em>
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p>
                      <em></em>
                      <em>{coins[1].symbol}</em>
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p>
                      <em></em>
                      <em>{coins[2].symbol}</em>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <p>
                      <em></em>
                      <em>{coins[3].symbol}</em>
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p>
                      <em></em>
                      <em>{coins[4].symbol}</em>
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p>
                      <em></em>
                      <em>{coins[5].symbol}</em>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <p>
                      <em></em>
                      <em>{coins[6].symbol}</em>
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p>
                      <em></em>
                      <em>{coins[7].symbol}</em>
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p>
                      <em></em>
                      <em>{coins[8].symbol}</em>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

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
              <option style={{ margin: 5 }} key={coin.rank}>
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
