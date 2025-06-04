import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Profile from './Components/Profile.js';
import SpotCard from './Components/SpotCard.js';
import icon from './assets/Union.svg';

const spots = [

  { title: "Val Thorens", img: "/first.png" },
  { title: "Restaurant terrace", img: "/second.png" },
  { title: "An outdoor cafe", img: "/third.png" },
  { title: "A very long bridge, over the forest", img: "/fourth.png" },
  { title: "Tunnel with morning light", img: "/fifth.png" },
  { title: "Mountain house", img: "/sixth.png" },

];


function App() {

  return (
    <div className="app">
      <Header />
      <Profile />
      <div className="spots-grid">

        {spots.map((spot, index) => (

          <SpotCard key={index} title={spot.title} img={spot.img} />

        ))
        }

      </div>

      <footer>2023 © Spots</footer>

    </div>

  );

}



export default App;



