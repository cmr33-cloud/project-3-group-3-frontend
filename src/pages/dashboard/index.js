import React from "react";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

import { io } from "socket.io-client";
import { addRoom, addSocket } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { FaCrown, FaGamepad, FaHome } from "react-icons/fa";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [userData, setUserData] = useState(null);
  const [newGame, setNewGame] = useState(false);
  const [gamesData, setGamesData] = useState(null);

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
      withCredentials: true,
    });
    newSocket.connect();
    newSocket.emit("join-room", e.target.id);
    dispatch(addSocket(newSocket));
    dispatch(addRoom(e.target.id));
    setRedirect(true);
  }

  function handleNewGame(e) {
    e.preventDefault();
    setNewGame(true);
    setRedirect(true);
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
      console.log(data);
      localStorage.setItem("username", data.name);
      localStorage.setItem('userId',data._id)
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

      console.log(gamesData);
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
  const SideBarIcon = ({ icon, text = "tooltip" }) => (
    <div className="sidebar-icon group z-20 mt-2 mb-2">
      {icon}

      <span class="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </div>
  );
  return !redirect ? (
    <Container className="d-flex w-80 card mt-5 z-0 dashboard-container">
      <div className="row mt-2">
        <div className="col stats">
          <h1>{userData && `Hello ${userData.name}, welcome to Inquizitve!`}</h1>
          <h2>your stats</h2>
          <div className="stats-icons-group">
            {userData &&
              Object.entries(userData.stats).map((item, index) => (
               

                <div className="stats-icons row">
                  { index === 0 ? (
                    <>
                    <div className = 'col'>
                    <SideBarIcon text="xp" icon={"xp"} />
                    </div>
                    <div className = 'col stats-text'>
                    {item[1]}
                    </div>
                    </>
                    
                    ) : index === 1 ? (
                      <>
                    <div className = 'col'>
                    <SideBarIcon text="level" icon={"level"} />
                    </div>
                      <div className = 'col stats-text'>
                    {item[1]}
                    </div>
                    </>
                  ) : index === 2 ? (
                    <>
                    <div className = 'col'>
                    <SideBarIcon text="games played"
                    icon={<FaGamepad size="28" data-testid="games-icon" />}
                    />
                    </div>
                    <div className = 'col stats-text'>
                    {item[1]}
                    </div>
                    </>
                    
                    
                  ) : (
                    <>
                      <div className = 'col'>
                    <SideBarIcon
                      text="wins"
                      icon={<FaCrown size="28" data-testid="crown-icon" />}
                      />
                      </div>
                    <div className = 'col stats-text'>
                      {item[1 ]}
                      </div>
                    
                    </>
                  )}
                </div>
                  
              ))}
          </div>
        </div>
        <div className="col">
          <h1 className="available-games-title">Available games</h1>
          <h3>click to join!</h3>
          <Container className="card mt-4 game-info-container">
            <div className="available-games-text">
              {gamesData && gamesData.length > 0 ? (
                gamesData.map((game) => (
                  <>
                    <h2
                      className="gamesLink"
                      onClick={handleClick}
                      id={game.name}
                    >
                      name: {game.name}
                    </h2>
                    <h3>participants:</h3>
                    {game.participants.map((participant) => (
                      <h4> {participant}</h4>
                    ))}
                    <hr />
                  </>
                ))
              ) : (
                <h2>
                  There are currently no available games... make one instead?
                </h2>
              )}
            </div>
          </Container>
          <div>
            <button className="mb-5 form-button" onClick={handleNewGame}>
              Create game
            </button>
          </div>
        </div>
      </div>
    </Container>
  ) : newGame ? (
    <Redirect to="/newgame" />
  ) : (
    <Redirect to="/lobby" />
  );
}
