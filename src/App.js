// import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Head from './Pages/Shared/Header/Head';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CardPunch from './Pages/DummyRequest/CardPunch';
import ViewBusList from './Pages/ViewBusList/ViewBusList';
import ViewStation from './Pages/ViewStation/ViewStation';
import Logout from './Pages/LogOut/LogOut';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/bus-list' element={<ViewBusList />} />
        <Route exact path='/Card-Punch' element={<CardPunch />} />
        <Route exact path='/stations' element={<ViewStation />} />
      </Routes>
    </Router>

  );
}

export default App;
