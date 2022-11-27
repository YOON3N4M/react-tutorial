import { useState } from "react";
import "../css/Popup.css";

function Popup() {
  const [hidepop, setHidepop] = useState(true);

  return (
    <div>
      <div id="pop">
        <span id="hi">자리야</span>
      </div>
    </div>
  );
}

export default Popup;
