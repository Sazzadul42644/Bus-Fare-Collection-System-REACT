import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Head from './Pages/Shared/Header/Head';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CardPunch from './Pages/DummyRequest/CardPunch';
import ViewBusList from './Pages/ViewBusList/ViewBusList';

function App() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/bus-list' element={<ViewBusList />} />
        <Route exact path='/Card-Punch' element={<CardPunch />} />
      </Routes>
    </Router>

  );
}

export default App;
