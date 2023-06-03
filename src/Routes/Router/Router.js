import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/Home";
import PlayersTraditionalWay from "../../components/PlayersTraditionalWay";
import PlayersReactQueries from "../../components/PlayersReactQueries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/playersTraditionalWay",
        element: <PlayersTraditionalWay />,
      },
      {
        path: "/playersReactQueries",
        element: <PlayersReactQueries />,
      },
    ],
  },
]);

export default router;
