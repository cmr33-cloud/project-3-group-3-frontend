import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaMedal } from "react-icons/fa";
import { useSelector } from "react-redux";
import SideBarIcon from "../../components/SideBarIcon";

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
      <Container className="card mt-5 results-card">
        <div class="row">
          <div class="col">
            {gameData &&
              gameData[0].participants
                .sort((a, b) => b.score - a.score)
                .map((participant, index) => (
                  <>
                    <div className="row">
                      <div className="col results-icons">
                        <h2>User:</h2>
                        <div>
                          {index === 0 ? (
                            <SideBarIcon
                              text="winner"
                              icon={
                                <FaMedal
                                  id='gold'
                                  size="28"
                                  data-testid="gold-medal-icon"
                                />
                              }
                            />
                          ) : index === 1 ? (
                            <SideBarIcon
                              text="runner up"
                              icon={
                                <FaMedal
                                  id='silver'
                                  size="28"
                                  data-testid="silver-medal-icon"
                                />
                              }
                            />
                          ) : index === 2 ? (
                            <SideBarIcon
                              text="almost good"
                              icon={
                                <FaMedal
                                  id='bronze'
                                  size="28"
                                  data-testid="silver-medal-icon"
                                />
                              }
                            />
                          ):
                            ""
                          }
                          <h3>{participant.participant}</h3>
                        </div>
                      </div>
                      <div className="col">
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
