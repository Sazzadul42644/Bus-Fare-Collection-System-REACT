// import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Head from './Pages/Shared/Header/Head';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CardPunch from './Pages/DummyRequest/CardPunch';
// import ViewBusList from './Pages/ViewBusList/ViewBusList';
import ViewStation from './Pages/ViewStation/ViewStation';
import Logout from './Pages/LogOut/LogOut';
import Home from './Pages/Home/Home';
import PassengerRegistration from './Pages/Passenger/PassengerRegistration/PassengerRegistration';
import PassengerHome from './Pages/Passenger/PassengerHome/PassengerHome';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import AddStation from './Pages/Admin/AddStation/AddStation';
import AddRoute from './Pages/Admin/AddRoute/AddRoute';
import BusOwnerHome from './Pages/BusOwner/BusOwnerHome/BusOwnerHome';
import RouteList from './Pages/BusOwner/RouteList/RouteList';
import BusList from './Pages/BusOwner/BusList/BusList';
import AddBus from './Pages/BusOwner/AddBus/AddBus';
import UpdateBus from './Pages/BusOwner/UpdateBus/UpdateBus';
import ForgetForm from './Pages/ForgetForm/ForgetForm';
import RouteOrderDistance from './Pages/RouteOrderDistance/RouteOrderDistance';
import PassengerList from './Pages/Admin/PassengerList/PassengerList';

function App() {
  return (
    <Router>
      {/* <Head /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/register-passenger' element={<PassengerRegistration />} />

        <Route exact path='/passenger-home' element={<PassengerHome />} />
        <Route exact path='/admin-home' element={<AdminHome />} />
        <Route exact path='/bus-owner-home' element={<BusOwnerHome />} />

        {/* <Route exact path='/bus-list' element={<ViewBusList />} /> */}
        <Route exact path='/Card-Punch' element={<CardPunch />} />
        <Route exact path='/stations' element={<ViewStation />} />

        <Route exact path='/add-stations' element={<AddStation />} />
        <Route exact path='/add-route' element={<AddRoute />} />

        <Route exact path='/route-list' element={<RouteList />} />
        <Route exact path='/list-Bus' element={<BusList />} />
        <Route exact path='/add-bus' element={<AddBus />} />

        <Route exact path='/update-bus/:id' element={<UpdateBus />} />

        <Route exact path='/password/forget' element={<ForgetForm />} />
        <Route exact path='/route-order' element={<RouteOrderDistance />} />


        <Route exact path='/passenger-list' element={<PassengerList />} />

      </Routes>
    </Router>

  );
}

export default App;
