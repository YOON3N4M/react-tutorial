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

  const reset = () => setMoney(0);
  const onChange = (event) => {
    setMoney(() => event.target.value);
  };
  const invert = () => {
    setDisable((prev) => !prev);
  };
  //
  const setEmpty = () => {
    if (money === 0) {
      setMoney("");
    }
  };

  //달러 소수점 정리
  const demical = money / 1300;
  const fixed = demical.toFixed(2); // 소수점 제거한 달러

  const ranked3 = coins.slice(0, 3); // 코인 랭킹 1~3까지의 배열
  const ranked6 = coins.slice(3, 6); // 코인 랭킹 4~6까지의 배열
  const ranked9 = coins.slice(6, 9); // 코인 랭킹 7~9까지의 배열

  return (
    <div id="coins">
      <div id="inputWrap">
        <div id="leftInput">
          {" "}
          <input
            disabled={disable}
            value={disable ? fixed : money}
            onChange={onChange}
            id="dollar"
            type="number"
            onClick={setEmpty}
          ></input>
          <label>USD</label>
        </div>
        <button id="equal">=</button>
        <div id="rightInput">
          {" "}
          <input
            disabled={!disable}
            onChange={onChange}
            value={disable ? money : money * 1300}
            //1달러 = 1300원으로 가정

            id="krw"
            type="number"
            onClick={setEmpty}
          ></input>
          <label>KRW</label>
        </div>
      </div>
      {
        loading ? (
          <strong>loading...</strong>
        ) : (
          <div id="converterBox">
            <div id="tableBox">
              <table id="convertTable">
                <tbody>
                  <tr>
                    {ranked3.map((ranked3) => (
                      <td id="cell" key={ranked3.rank}>
                        <div id="ea">
                          <span>
                            {" "}
                            {disable
                              ? (
                                  money /
                                  1330 /
                                  ranked9.quotes.USD.price
                                ).toFixed(8)
                              : (money / ranked3.quotes.USD.price).toFixed(8)}
                          </span>
                        </div>
                        <p id="symbol">
                          <em>{ranked3.symbol}</em>
                        </p>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {ranked6.map((ranked6) => (
                      <td id="cell" key={ranked6.rank}>
                        <div id="ea">
                          <span>
                            {" "}
                            {disable
                              ? (
                                  money /
                                  1330 /
                                  ranked6.quotes.USD.price
                                ).toFixed(8)
                              : (money / ranked6.quotes.USD.price).toFixed(8)}
                          </span>
                        </div>
                        <p id="symbol">
                          <em>{ranked6.symbol}</em>
                        </p>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {ranked9.map((ranked9) => (
                      <td id="cell" key={ranked9.rank}>
                        <div id="ea">
                          <span>
                            {" "}
                            {disable
                              ? (
                                  money /
                                  1330 /
                                  ranked9.quotes.USD.price
                                ).toFixed(8)
                              : (money / ranked9.quotes.USD.price).toFixed(8)}
                          </span>
                        </div>
                        <p id="symbol">
                          <em>{ranked9.symbol}</em>
                        </p>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
        // 아래는 map()을 안쓰고 그냥 일일히 넣은 방식임
        /* <div id="converterBox">
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
        </div> */
      }

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
