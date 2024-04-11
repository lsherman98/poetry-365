import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoems } from "../features/poemSlice";
import NavItem from './NavItem'
import './PoemNav.css'


function PoemNav() {
    const poems = useSelector((state) => state.poemStore.poems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPoems());
    }, []);

    return (
        <div className="sidebar">
            <ul>
                {poems && poems.map((poem) => {
                    return <NavItem key={poem._id} poem={poem} />;
                })}
            </ul>
        </div>
    );
}

export default PoemNav;
