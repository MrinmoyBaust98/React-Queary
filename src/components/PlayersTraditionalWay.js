import axios from "axios";
import React, { useEffect, useState } from "react";

const PlayersTraditionalWay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/players")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2 className="my-6 text-xl font-bold">Top 3 Players</h2>
      {data.map((player) => {
        return <div key={player.id}>{player.name}</div>;
      })}
    </>
  );
};

export default PlayersTraditionalWay;
