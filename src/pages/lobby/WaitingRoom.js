import React, {useState, useEffect} from 'react'

export default function WaitingRoom(props) {

    const [gamesData,setGamesData] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "./";
        }
        let isMounted = true;
        async function fetchGamesData() {
          const options = {
            method: "GET",
            headers: {
              "auth-token": token,
            },
          };
          const roomName = props.roomId
          const result = await fetch(
            `https://quiz-app-project-3.herokuapp.com/api/games/show/${roomName}`,
            options
          );
          const gamesData = await result.json();
          
          console.log(gamesData)
          if (isMounted) {
            setGamesData(gamesData);
          }
        }
        fetchGamesData();
        
    
        return () => {
          isMounted = false;
        };
      }, []);
    return (
        <div>
          <h2>Waiting room for {props.roomId}</h2>
            {gamesData && gamesData.participants.map((p,index) => {
                return (
                    <p key={`participant ${index}`}>{p}</p>
                )
            })}
        </div>
    )
}
