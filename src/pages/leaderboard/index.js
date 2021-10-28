import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaMedal } from 'react-icons/fa'
import SideBarIcon from '../../components/SideBarIcon'

export default function Leaderboard() {
    const [gameData, setGameData] = useState(null)


    useEffect(() => {
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
            `https://quiz-app-project-3.herokuapp.com/api/games/completedgames`,
            options
          );
          console.log(result)
          const data = await result.json();
          console.log(data);
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
        <h1>Leaderboard</h1>
        <Container className="card mt-5 results-card leaderboard-card">
          <div class="row">
            <div class="col">
              {gameData &&
                gameData
                  .map((participant, index) => (
                    <>
                      <div className="row">
                        <div className="col results-icons">
                          
                          <div className = 'flex flex-row self-center align-items-center p-2'>
                          <h3>{participant.username}</h3>
                            {index === 0 ? (
                              <SideBarIcon
                                text="winner"
                                className = ''
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
    )
}
