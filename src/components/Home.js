import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const { user, logOut } = useUserAuth();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  }
  const handleFeedback = async () => {
    navigate("/feedback");
  }



  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
      <div className='p-4  mt-3 text-center'>
        Hello Welcome
        <br />
        {user && user.email}
      </div>
      <div class="main container">
        <div class="jumbotron my-4">
          <h1 class="display-4">Current Time Is: <span id="time"></span></h1>
          <p class="lead">we have got you covered!.</p>

        </div>
      </div>
      <div className="buttons">
        <div className='d-grid gap-2 button '>
          <Button variant='primary' onClick={handleLogout}>Log out</Button>
        </div>
        <div className='d-grid gap-2 button '>
          <Button variant='primary' onClick={handleFeedback}>Feedback</Button>
        </div>
      </div>
    </>
  );
};

let a;
let currTime;
let dayDate;
// const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
const options = { 'weekday': 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
  a = new Date();
  currTime = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  dayDate = a.toLocaleDateString(undefined, options);
  document.getElementById('time').innerHTML = currTime + " on<br>" + dayDate;

  document.getElementById('usa').innerHTML = "<b>America : </b>" + a.toLocaleString('en-US', { timeZone: 'America/New_York' });
  document.getElementById('australia').innerHTML = "<b>Australia : </b>" + a.toLocaleString('en-US', { timeZone: 'Australia/Sydney' });
  document.getElementById('africa').innerHTML = "<b>Africa : </b>" + a.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' });
  document.getElementById('asia').innerHTML = "<b>Asia : </b>" + a.toLocaleString('en-US', { timeZone: 'Asia/Dubai' });
  document.getElementById('antarctica').innerHTML = "<b>Antarctica : </b>" + a.toLocaleString('en-US', { timeZone: 'Antarctica/Palmer' });
  document.getElementById('europe').innerHTML = "<b>Europe : </b>" + a.toLocaleString('en-US', { timeZone: 'Europe/Monaco' });
}, 1000);

export default Home;