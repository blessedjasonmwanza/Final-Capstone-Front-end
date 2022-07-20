// How to access redux store object

// import useSelector
// import { useSelector } from 'react-redux';

// inside your component
/**
 * to use the rooms state
 * const component = () => {
 *  const rooms = useSelector((state) => state.rooms.rooms);
 * }
 * export default component;
 */

// How to update your redux store
// Inside your component e.g

/**
 * import { useSelector, useDispatch } from 'react-redux';
 *  const rooms = useSelector((state) => state.rooms.rooms);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadInitialData([initial data here]));
    }, []);
 */
