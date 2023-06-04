import axios from "axios";
import { useQuery } from "react-query";

const fetchdata = () => {
  return axios.get("http://localhost:4000/players");
};
const PlayersReactQueries = () => {
  const { isloding, data } = useQuery("players", fetchdata);

  //Loading If data fetch takes time
  if (isloding) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2 className="my-6 text-xl font-bold">
        Top 3 players using React Query
      </h2>
      {data?.data.map((player) => {
        return <div key={player.id}>{player.name}</div>;
      })}
    </>
  );
};

export default PlayersReactQueries;
