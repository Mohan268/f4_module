import React, { useState, useEffect } from 'react';
import "./Profile.css"

export default function Profile() {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('id');
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserState(data));
  }, []);

  return (
    <div>
      {userState ? (
        <div  className='container'>
            <h1>Profile</h1>
         <div>
             <img src= {userState.image} alt="Person" className='image'/>
          </div>
          <div>
            <strong>Name:</strong> {userState.firstName},{' '}, {userState.lastName}
          </div>
          <div>
            <strong>Age:</strong> {userState.age}
          </div>
          <div>
            <strong>Blood-Group:</strong> {userState.bloodGroup}
          </div>
          <div>
            <strong>Address:</strong> {userState.address.address},{' '}
            {userState.address.city},{' '}{userState.address.postalCode}
          </div>
          <div>
            <strong>Email:</strong> {userState.email}
          </div>
          <div>
            <strong>Phone:</strong> {userState.phone}
          </div>
          <div>
            <strong>University:</strong> {userState.university}
          </div>
          <div>
            <strong>Company:</strong> {userState.company.name}<br/>
            <strong>Department:</strong> {userState.company.department}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}