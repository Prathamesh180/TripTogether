// import React, { useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import '../styles/LoginPage.css';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginStatus, setLoginStatus] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const userData = {
//       email,
//       password,
//     };
  
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });
  
//       if (response.ok) {
//         // Login successful
//         const cookies = response.headers.get('set-cookie');
//         document.cookie = cookies; // Store the received cookies
//         setLoginStatus('success');
//       } else if (response.status === 401) {
//         // Incorrect password
//         setLoginStatus('incorrect');
//       } else {
//         // Login failed
//         throw new Error('Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  

//   return (
//     <div className="container" id="/login">
//       <h2>Login Page</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//       {loginStatus === 'success' && (
//         <CSSTransition
//           in={true}
//           classNames="fade"
//           timeout={300}
//           unmountOnExit
//         >
//           <p className="success-message">Login successful!</p>
//         </CSSTransition>
//       )}
//       {loginStatus === 'incorrect' && (
//         <CSSTransition
//           in={true}
//           classNames="fade"
//           timeout={300}
//           unmountOnExit
//         >
//           <p className="error-message">Incorrect password. Please try again.</p>
//         </CSSTransition>
//       )}
//     </div>
//   );
// }


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      email,
      password,
    };
  
    try {
      const response = await fetch('http://localhost:8000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        // Login successful
        const cookies = response.headers.get('set-cookie');
        document.cookie = cookies; // Store the received cookies
        setLoginStatus('success');
      } else if (response.status === 401) {
        // Incorrect password
        setLoginStatus('incorrect');
      } else {
        // Login failed
        throw new Error('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container" id="/login">
      <h2>Login Page</h2>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/b15.jfif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/b16.jfif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/b17.jfif" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {loginStatus === 'success' && (
        <CSSTransition
          in={true}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <p className="success-message">Login successful!</p>
        </CSSTransition>
      )}
      {loginStatus === 'incorrect' && (
        <CSSTransition
          in={true}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <p className="error-message">Incorrect password. Please try again.</p>
        </CSSTransition>
      )}
    </div>
  );
}
