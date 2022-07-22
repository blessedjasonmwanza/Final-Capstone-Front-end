import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import RoomsList from './components/RoomsList';
import MyReservations from './components/MyReservations';
import Reserve from './components/Reserve';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route exact="true" path="/" element={<RoomsList />} />
      <Route exact="true" path="/reserve" element={<Reserve />} />
      <Route exact="true" path="/myreservations" element={<MyReservations />} />
    </Routes>
  </Router>
);

export default App;
