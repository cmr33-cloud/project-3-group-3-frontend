import React from "react";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

import { io } from "socket.io-client";
import { addRoom, addSocket } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";


export default function Dashboard() {
  const dispatch = useDispatch()
  const [redirect, setRedirect] = useState(false)
  const [userData, setUserData] = useState(null);
  const [newGame, setNewGame] = useState(false)
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

  function handleNewGame(e) {
    e.preventDefault();
    setNewGame(true);
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

      <div className="row">
        <div className="col">
          <h1>{userData && userData.name}</h1>
          <h2>Stats</h2>
          <div>
            {userData &&
              Object.entries(userData.stats).map((item) => (
                <h2>
                  {item[0]}: {item[1]}
                </h2>
              ))}
          </div>
        </div>
        <div className="col">
        <h1>Available games</h1>
        <Container className = 'card mt-5 game-info-container'>
        
        <div>
            {gamesData && gamesData.length > 0 ?
              gamesData.map((game) => (
                <>
                <h2 className='gamesLink' onClick={handleClick} id={game.name} >name: {game.name}</h2>
                <h3>participants:</h3>
                {game.participants.map(participant => (
                  <h4> {participant}</h4>
                ))}
                <hr/>
                </>
              )) : <h2>There are currently no available games... make one instead?</h2>}
                
              
          </div>
          
      </Container>
      <div>
            <Button className = 'mb-5' onClick = {handleNewGame}>Create game</Button>
          </div>
        </div>
      </div>


      
    </Container> : (newGame ? <Redirect to="/newgame"/> : <Redirect to="/lobby"/>)

  );
}
