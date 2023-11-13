import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../pages/Menu";
import Match from "../pages/Match";
import PlayAgain from "../pages/PlayAgain";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Menu/>},
            {path: "menu", element: <Menu/>},
            {path: "match", element: <Match/>},
            {path: "playagain", element: <PlayAgain/>},
        ]
    }
])