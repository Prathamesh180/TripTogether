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
