import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoem } from "../../store/features/poemSlice";
import "./PoemNav.css"

const NavItem = ({ poem }) => {
    const dispatch = useDispatch();

    const selectedPoem = useSelector((state) => state.poemStore.selectedPoem);

    const isSelected = selectedPoem._id === poem._id

    useEffect(() => {
        const activeNavElement = document.querySelector(`.selected`);
        activeNavElement?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });

    }, [selectedPoem])

    const handleClick = () => {
        dispatch(getPoem(poem._id));
    };

    return (
        <li onClick={handleClick} className={`${isSelected ? "selected" : ""}`}>
            <p className="navItemTitle">{poem.title}</p>
            <p className="navItemAuthor">By {poem.author}</p>
        </li>
    );
};

export default NavItem;
