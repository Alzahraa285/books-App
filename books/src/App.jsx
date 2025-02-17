//import logo from './logo.svg';
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes, Navigate} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';

import Books from  './pages/Books/Books'
import Author from  './pages/Author/Author'

import About from './pages/About/About';
import Contact from  './pages/Contact/Contact'

import Register from './pages/Regester/Register';
import Login from  './pages/Login/Login'
import LogOut from './pages/LogOut/LogOut'

import BookPage from "./pages/bookPage/BookPage";

import Footr from './pages/Footer/Footr'




//import Loading from "../pages/Loading/Loading";

export default function App() {
  return (

<div>
      <Navbar />
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
                <Home />
              // </ProtectedRoute>
            }
          />

          <Route
            path="home"
            element={
              // <ProtectedRoute>
                <Home />
              // </ProtectedRoute>
            }
          />
          <Route
            path="books"
            element={
              // <ProtectedRoute>
                <Books />
              // </ProtectedRoute>
            }
          />
          <Route
            path="author"
            element={
              // <ProtectedRoute>
                <Author />
              // </ProtectedRoute>
            }
          />
     
          <Route
            path="about"
            element={
              // <ProtectedRoute>
                <About />
              // </ProtectedRoute>
            }
          />
          <Route
            path="contact"
            element={
              // <ProtectedRoute>
                <Contact />
              // </ProtectedRoute>
            }
          />
       
       <Route exact path='/details/:id' element={<BookPage />} />
     
          {/* <Route
            path="books/:id"
            element={
              <ProtectedRoute>
                <BooksDetailes />
              </ProtectedRoute>
            }
          />
          <Route
            path="author/:id"
            element={
              <ProtectedRoute>
                <AuthorDetailes />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route path="login" element={<Login saveUserData={saveUserData} />} /> */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<LogOut />}/>
          <Route
            path="*"
            element={<h1 className="text-danger text-center ">NOT FOUND</h1>}
          />
        </Routes>
      </div>
      <Footr/>
      
    </div>
   
  )
}























// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
