import Header from "./pages/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main/Main";
import Valorant from "./pages/Main2/Maintwo";
import ValorantRank from "./pages/Rank/val/Rank2";
import ValorantBuilder from "./pages/Build/val/Build2";
import Rank from "./pages/Rank/lol/Rank";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/rank" element={<Rank />}></Route>
          <Route path="/builder" element={<Main />}></Route>
          <Route path="/valorant" element={<Valorant />}></Route>
          <Route path="/valrank" element={<ValorantRank />}></Route>
          <Route path="/valbuilder" element={<ValorantBuilder />}></Route>
        </Routes>/-
      </BrowserRouter>
    </div>
  );
}

export default App;
