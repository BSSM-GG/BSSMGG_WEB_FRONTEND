import Header from "./pages/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main/Main";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/rank" element={<Main />}></Route>
          <Route path="/builder" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
