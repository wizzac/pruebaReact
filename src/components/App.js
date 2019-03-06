import React from 'react';
import styled from 'styled-components';

//import Nabvar from './Navbar/Navbar'
import Login from './Login/Login'
import firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyD6dwZetB7GNS528bQhV4lgB-pl34_n2X0",
    authDomain: "test-firebase-app-c039f.firebaseapp.com",
    databaseURL: "https://test-firebase-app-c039f.firebaseio.com",
    projectId: "test-firebase-app-c039f",
    storageBucket: "test-firebase-app-c039f.appspot.com",
    messagingSenderId: "4892780509"
});


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
library.add(faHome)
library.add(faIgloo)
library.add(faKeyboard)
library.add(faAddressCard)




const App = () => (
    <Login></Login>
    //<Nabvar name="asd"></Nabvar>      
);

export default App;
