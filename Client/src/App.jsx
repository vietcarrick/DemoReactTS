import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './layout/Main';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<Main></Main>}>
            <Route 
              path="/"
              element={<HomePage></HomePage>}>
            </Route>
        </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/profile/:id" element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
