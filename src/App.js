import './App.css';
import { Routes, Route } from 'react-router-dom';
import Rooms from './components/rooms/rooms';
import MyReservations from './components/reservations/MyReservations';
import AddReservation from './components/reservations/AddReservation';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import RoomForm from './components/roomForm/roomForm';
import RoomDetails from './components/roomDetails/roomDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/addreservation" element={<AddReservation />} />
        <Route path="/addRoom" element={<RoomForm />} />
        <Route path="/rooms:item.id" component={<RoomDetails />} />
      </Routes>
    </div>
  );
}

export default App;
