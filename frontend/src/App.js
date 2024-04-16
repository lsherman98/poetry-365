import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import PoemNav from "./components/PoemNav/PoemNav";
import DisplayPoem from "./components/DisplayPoem";

const Layout = () => {
    return (
        <>
            <PoemNav />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <DisplayPoem />,
            },
            {
                path: '/:day',
                element: <DisplayPoem />
            },
            {
                path: "*",
                element: <DisplayPoem />
            }
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
