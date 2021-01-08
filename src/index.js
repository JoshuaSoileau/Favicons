import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";

import App from "./App";

const tagManagerArgs = {
  gtmId: "GTM-522H9K6",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById("root"));
