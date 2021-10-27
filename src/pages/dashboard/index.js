import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../Styles/Dashboard.css"
import { io } from "socket.io-client";
import { addRoom, addSocket } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function Dashboard() {
  const dispatch = useDispatch()
  const [redirect, setRedirect] = useState(false)
  const [userData, setUserData] = useState(null);

  const [gamesData, setGamesData] = useState(null)

  // function renderStats(stats) {
  //     Object.entries(stats).forEach(item => {
  //         console.log(item[0],item[1])
  //         return (
  //         <h2>{item[0]}: {item[1]}</h2>
  //         )
  //       })
  // }

  
  function handleClick(e) {
    e.preventDefault();
    const newSocket = io("https://quiz-app-project-3.herokuapp.com/", {
      withCredentials: true})
    newSocket.connect()
    newSocket.emit('join-room', e.target.id)
    dispatch(addSocket(newSocket))
    dispatch(addRoom(e.target.id))
    setRedirect(true)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "./";
    }
    let isMounted = true;
    async function fetchData() {
      const options = {
        method: "GET",
        headers: {
          "auth-token": token,
        },
      };
      const result = await fetch(
        "https://quiz-app-project-3.herokuapp.com/api/user/show",
        options
      );
      const data = await result.json();
      console.log(data)
      localStorage.setItem('username',data.name)
      if (isMounted) {
        setUserData(data);
      }
    }
    async function fetchGamesData() {
      const options = {
        method: "GET",
        headers: {
          "auth-token": token,
        },
      };
      const result = await fetch(
        "https://quiz-app-project-3.herokuapp.com/api/games/show",
        options
      );
      const gamesData = await result.json();
      
      console.log(gamesData)
      if (isMounted) {
        setGamesData(gamesData);
      }
    }
    fetchData();
    fetchGamesData();
    

    return () => {
      isMounted = false;
    };
  }, []);

  return (

    !redirect ? 
    <Container className="d-flex w-80 card mt-5 z-0 dashboard-container">

      <div className="row main-container">
        <div className="col">
          <h1 className="dashboard-name border mt-3 mb-4 rounded fs-1 text">{userData && userData.name}</h1>
          <div className="border rounded mb-3">
          <h2 className="dashboard-stats fs-2 text pt-1 mb-0">Quiz Statistics</h2>
          <hr className="mb-2 mt-3"/>
          <div>
            {userData &&
              Object.entries(userData.stats).map((item) => (
                <h2 className="dashboard-entries">
                  {item[0]}: {item[1]}
                </h2>
              ))}
          </div>
        </div>
        </div>
        <div className="col">
        <h1 className="mt-3">Game Information</h1>
        <Container className = 'card mt-4 game-info-container'>
        
        <div className="game-info-box">
            {gamesData &&
              gamesData.map((game) => (
                <>
                <h2 className='gamesLink' onClick={handleClick} id={game.name} >name: {game.name}</h2>
                <h3>participants: {game.participants[0]}, { game.participants[1]}</h3>
                <hr/>
                </>
              ))}
                
              
          </div>
        
      </Container>
        </div>
      </div>


      
    </Container> : <Redirect to="/lobby"/>

  );
}
