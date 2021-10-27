import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Results() {
  const score = useSelector((state) => state.score);
  const socket = useSelector((state) => state.socket);
  const gameId = useSelector((state) => state.gameId);
  const [gameData, setGameData] = useState(null);
  useEffect(() => {
    socket.emit("end-game", { gameId: gameId, score: score });
    let isMounted = true;
    async function fetchData() {
      const token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          "auth-token": token,
        },
      };
      const result = await fetch(
        `https://quiz-app-project-3.herokuapp.com/api/games/completedgames/${gameId}`,
        options
      );
      const data = await result.json();
      console.log(gameData);
      if (isMounted) {
        setGameData(data);
      }
      
    }
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
      <div>
          <h1>the game is over...</h1>
    <Container className = 'card mt-5 results-card'>
      <div class="row">
          <div class='col'>
        {gameData && gameData[0].participants.map((participant, index) => (
            
            <>
            <div className='row'>

            <div className = 'col'>
                <h2>User:</h2> 
                <h3>{participant.participant}</h3>
            </div>
            <div className = 'col'>
                <h2>Score:</h2> 
                <h3>{participant.score}</h3>
            </div>
            </div>
            </>
        ))}
        </div>
      </div>
    </Container>
        </div>
  );
}
