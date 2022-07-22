import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <>
    <div>
      <h1>Hotel Title</h1>
    </div>
    <div>
      <NavLink to="/" exact="true">
        RoomsList
      </NavLink>
      <NavLink to="/reserve">
        Reserve
      </NavLink>
      <NavLink to="/myreservations">
        MyReservations
      </NavLink>
    </div>
    <hr />
  </>
);

export default Navigation;
