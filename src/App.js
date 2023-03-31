import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/search/Search.jsx";
import History from "./pages/history/History";

function App() {
  // const user = useSelector(selectUser);

  return (
    <>
      {/* <div>{user ? <Search /> : <Login />}</div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/history" element={<History />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
