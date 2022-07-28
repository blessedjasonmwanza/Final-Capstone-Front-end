/* eslint-disable */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Aside from '../sidebar/sidebar';

import { addNewRoom } from '../../features/rooms/roomsState';

const RoomForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [surface, setSurface] = useState(0);
  const [image_url, setImageUrl] = useState('');

  const onNameChanged = (e) => setName(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onSurfaceChanged = (e) => setSurface(e.target.value);
  const onImageUrlChanged = (e) => setImageUrl(e.target.value);
  const navigate = useNavigate();

  const canSave = [
    name,
    price,
    surface,
    image_url,
    description,
  ].every(Boolean);

  const onSubmitRoom = () => {
    if (canSave) {
      try {
        const obj = {
          name,
          price,
          surface,
          image_url,
          description,
        };

        dispatch(addNewRoom(obj));

        setName('');
        setPrice(0);
        setDescription('');
        setSurface(0);
        setImageUrl('');
        navigate('/');

      } catch (err) {
       return err;
      }
    }
  };

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />

      <div>
        <h1>Add Room</h1>
        <form>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">
              Name
              <input
                id="name"
                type="text"
                placeholder="Name"
                onChange={onNameChanged}
              />
            </label>
          </div>
          
          <div class="mb-3">
            <label htmlFor="description" class="form-label">
              Description
              <input
                type="textarea"
                id="description"
                rows="4"
                cols="50"
                placeholder="Description of the house"
                onChange={onDescriptionChanged}
              />
            </label>
          </div>
          <div class="mb-3">
            <label htmlFor="image_url" class="form-label">
              Image
              <input
                id="image_url"
                type="url"
                placeholder="Image url"
                onChange={onImageUrlChanged}
              />
            </label>
          </div>
          <div class="mb-3">
            <label htmlFor="price" class="form-label">
              Price
              <input
                id="price"
                type="number"
                placeholder="Price per night"
                onChange={onPriceChanged}
              />
            </label>
          </div>

          <div class="mb-3">
            <label htmlFor="surface" class="form-label">
              surface
              <input
                id="surface"
                type="number"
                placeholder="surface in m2"
                onChange={onSurfaceChanged}
              />
            </label>
          </div>
          
          <div>
            <button type="button" onClick={onSubmitRoom} disabled={!canSave} class="btn btn-primary">
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomForm;
