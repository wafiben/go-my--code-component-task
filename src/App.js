import logo from './logo.svg';
import './App.css';
import profileImage from './profileImage.JPG';

import React,{Component} from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
 

function App() {
  return (
    <div className="App">
     <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
