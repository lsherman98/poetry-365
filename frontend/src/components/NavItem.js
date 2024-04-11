import React from "react";
import { useDispatch } from "react-redux";
import { getPoem } from "../features/poemSlice";

const NavItem = ({ poem }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getPoem(poem._id))
    };

    return (
        <li onClick={handleClick}>
            <p>{poem.title}</p>
            <p>By {poem.author}</p>
        </li>
    );
};

export default NavItem;
