import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { io } from "socket.io-client";
import { addSocket } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
export default function Dashboard() {
  const dispatch = useDispatch()
  const socket = useSelector(state => state.socket)
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
        <h1>game info here</h1>
        <Container className = 'card mt-5 game-info-container'>
        
        <div>
            {gamesData &&
              gamesData.map((game) => (
                <>
                <h2 className='gamesLink' onClick={handleClick} id={game.name} >name: {game.name}</h2>
                <h3>participants: {game.participants[0]}, {game.participants[1]}</h3>
                <hr/>
                </>
              ))}
                
              
          </div>
        
      </Container>
        </div>
      </div>

      
    </Container>
  );
}
