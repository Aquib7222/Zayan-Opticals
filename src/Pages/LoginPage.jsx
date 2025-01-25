// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./LoginPage.css";
// function LoginPage() {
//   const [isSignup, setIsSignup] = useState(false);  // Toggle between Signup and Login
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleAuth = (e) => {
//     e.preventDefault();

//     // Fetch existing users from localStorage
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     if (isSignup) {
//       // Signup Logic
//       if (password !== confirmPassword) {
//         setError('Passwords do not match.');
//         return;
//       }

//       // Check if username already exists
//       if (users.some(user => user.username === username)) {
//         setError('Username already exists.');
//         return;
//       }

//       // Store user data
//       const newUser = { username, password };
//       users.push(newUser);
//       localStorage.setItem('users', JSON.stringify(users));

//       // Redirect to login page after successful signup
//       navigate('/login');
//     } else {
//       // Login Logic
//       const user = users.find(user => user.username === username);

//       if (user && user.password === password) {
//         // Store token in localStorage for session (simple method)
//         localStorage.setItem('userToken', 'some_token_value');
//         // Redirect to the homepage
//         navigate('/');
//       } else {
//         setError('Invalid credentials, please try again!');
//       }
//     }
//   };

//   return (
//     <div className="auth-container">
//         <h1 className="text-center">Welcome to Zayan Opticals</h1>
//       <h2>{isSignup ? 'Signup' : 'Login'}</h2>
//       <div className="d-flex justify-content-center">
//       <form onSubmit={handleAuth} className="">
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input 
//             type="text" 
//             id="username" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input 
//             type="password" 
//             id="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required
//           />
//         </div>
//         {isSignup && (
//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input 
//               type="password" 
//               id="confirmPassword" 
//               value={confirmPassword} 
//               onChange={(e) => setConfirmPassword(e.target.value)} 
//               required
//             />
//           </div>
//         )}
//         {error && <p className="error">{error}</p>}
//         <button type="submit" className="auth-btn">{isSignup ? 'Signup' : 'Login'}</button>
//       </form>
      
//       <p className=''>
//         {isSignup ? "Already have an account?" : "Don't have an account?"} 
//         <span className="toggle-link bg-primary " onClick={() => setIsSignup(!isSignup)}>
//           {isSignup ? 'Login here' : 'Signup here'}
//         </span>
//       </p>
//       </div>
      
//     </div>
//   );
// }

// export default LoginPage;
