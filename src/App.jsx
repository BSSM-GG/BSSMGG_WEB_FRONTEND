import Header from "./pages/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main/Main";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
