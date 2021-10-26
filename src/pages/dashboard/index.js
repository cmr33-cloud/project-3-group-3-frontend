import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";


export default function Dashboard() {
  const [userData, setUserData] = useState(null);


  // function renderStats(stats) {
  //     Object.entries(stats).forEach(item => {
  //         console.log(item[0],item[1])
  //         return (
  //         <h2>{item[0]}: {item[1]}</h2>
  //         )
  //       })
  // }

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
      if (isMounted) {
        setUserData(data);
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
    <Container className="d-flex w-80 card mt-5">
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
        <Container>
        <h1>game info here</h1>
      </Container>
        </div>
      </div>
    </Container>
    
    </>
  );
}
