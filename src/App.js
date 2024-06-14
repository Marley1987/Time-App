import React, { useEffect } from 'react';
import Footer from './footer';
import './App.css';

function App() {
  useEffect(() => {
    // Function to update the time
    function myTimer() {
      const d = new Date();
      document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }

    // Set the interval to update the time every second
    const interval = setInterval(myTimer, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);

  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <div class="container mt-3">
      <div class="container p-5 my-5 bg-primary text-white">
      <h1 class="CT">Current Time</h1>
      <h3>By Marley &copy;</h3>
      <p>This webpage always displays the current time</p>
      <p id="demo"></p>

      <Footer/>
      </div>
    </div>
  );
}

export default App;
