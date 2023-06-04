import React, { useEffect, useState } from 'react';
import "../styles/JoinUs.css";

export default function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/trips')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setTrips(data.trips);
          console.log(data.trips)
        } else {
          console.log('Error fetching trips:', data.error);
        }
      })
      .catch(error => {
        console.error('Error fetching trips:', error);
      });
  }, []);

  return (
    <div>
      <h2>Trip List</h2>
      {trips.map(trip => (
        <div key={trip._id}>
          <p>Date: {new Date(trip.date).toLocaleDateString()}</p>
          <p>Time: {trip.time}</p>
          <p>Member: {trip.member}</p>
          <p>Gender: {trip.gender}</p>
          <p>Age: {trip.age}</p>
          <p>Location: {trip.location}</p>
          <p>Created By: {trip.createdBy.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );}
//
// import React, { useEffect, useState } from 'react';
// import { TextField } from '@material-ui/core';
// import '../styles/JoinUs.css'; // Import the CSS file

// export default function TripList() {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/api/v1/trips')
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           setTrips(data.trips);
//           console.log(data.trips);
//         } else {
//           console.log('Error fetching trips:', data.error);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching trips:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Trip List</h2>
//       {trips.map(trip => (
//         <div key={trip._id} className="card"> {/* Add the "card" class */}
//           <TextField label="Location" value={trip.location} fullWidth disabled />
//           <TextField label="Date" value={new Date(trip.date).toLocaleDateString()} fullWidth disabled />
//           <TextField label="Time" value={trip.time} fullWidth disabled />
//           <TextField label="Member" value={trip.member} fullWidth disabled />
//           <TextField label="Gender" value={trip.gender} fullWidth disabled />
//           <TextField label="Age" value={trip.age} fullWidth disabled />
//           <TextField label="Location" value={trip.location} fullWidth disabled />
//           <TextField label="Created By" value={trip.createdBy.name} fullWidth disabled />
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }
