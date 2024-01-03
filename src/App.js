import "./App.css";
import { Myheader } from "./Components/Myheader";
import "bootstrap/dist/css/bootstrap.min.css";
import Netflix from "./Components/Netflix";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import WhateverWork from "./Components/WhateverWork";
import WhatOthers from "./Components/WhatOthers";
import Myfooter from "./Components/Myfooter";
import Simplicity from "./Components/Simplicity";
import Launhed from "./Components/Launched";
import BackToTop from "./Components/BackToTop";
function App() {
  return (
    <div className=" overflow-hidden">
      <BackToTop />
      <Myheader />
      <Netflix />
      <WhateverWork />
      <Simplicity />
      <WhatOthers />
      <Launhed />
      <Myfooter />
    </div>
  );
}

export default App;
