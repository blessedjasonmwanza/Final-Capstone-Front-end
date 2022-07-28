import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectRoomById } from '../../features/rooms/roomsState';

import Aside from '../sidebar/sidebar';

function RoomDetails() {
  const { roomId } = useParams();

  const room = useSelector((state) => selectRoomById(state, Number(roomId)));
  // console.log(room);

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1 p-3">
        <div className="card">
          <div>
            <h2>
              Room
              {room.name}
            </h2>
          </div>
          <div>
            <img src={room.image_url} alt={room.name} className="img-fluid" />
          </div>

          <div className="card-body">
            <p className="card-text">
              Price:
              {room.price}
              {' '}
              per night
            </p>
            <p className="card-text">
              description:
              {room.description}
            </p>
            <p className="card-text">
              surface:
              {room.surface}
            </p>
          </div>

          <button className="btn btn-primary" type="button">Add reservation</button>
          <button className="btn btn-primary" type="button">Delete Room</button>
        </div>
      </main>
    </div>
  );
}

export default RoomDetails;
