import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {
//helps take store out of the index component and select specific part of the store
 const planeList = useSelector(store => store.planeList)
 //this is not set to [] array becasue...
 const [newPlane, setNewPlane] = useState('')
 const dispatch = useDispatch();

 //
 const handleSubmit = (event) => {
  //prevent reloading on submit
  event.preventDefault();
  //telling redux to activate action so we can add new plane
  dispatch({type: 'ADD', payload: newPlane})
  //clear input
  setNewPlane('')

 }
 console.log('plane list is', planeList)
  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='plane name'
        value={newPlane}
        onChange={event => setNewPlane(event.target.value)}
        />
        <button type="submit">Add Plane</button>
      </form>
      <table>
        <tr>
        <thead>Plane Table</thead>
        </tr>
          <tbody>
          
            <th>Planes</th>
            
            {planeList.map((plane, i) => (
              <tr key={i}><td>{`new plane is ${plane}`}</td></tr>
            ))}
          
         </tbody>
        
        </table>
    </div>
  );
}

export default App;
