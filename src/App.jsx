import Header from "./pages/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main/Main";
import Valorant from "./pages/Main2/Maintwo";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/rank" element={<Main />}></Route>
          <Route path="/builder" element={<Main />}></Route>
          <Route path="/valorant" element={<Valorant />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
