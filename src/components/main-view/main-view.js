import React from 'react';
import logo from '../../logo.svg';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
//import { MovieCard } from '../movie-card/movie-card';
//import { MovieView } from '../movie-view/movie-view';
//import { DirectorView } from '../director-view/director-view';
//import { GenreView } from '../genre-view/genre-view';
//import { RegistrationView } from '../registration-view/registration-view';
//import { ProfileView } from '../profile-view/profile-view';
//import { UpdateView } from '../update-view/update-view';

import './main-view.css';

function MainView() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MainView;
