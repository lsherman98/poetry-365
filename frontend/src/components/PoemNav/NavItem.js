import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoem } from "../../store/features/poemSlice";
import "./PoemNav.css"
import { useNavigate } from "react-router-dom";

const NavItem = ({ poem }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

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
        navigate(`/${poem.day}`);
    };

    return (
        <li onClick={handleClick} className={`${isSelected ? "selected" : ""}`}>
            <p className="navItemTitle">{poem.title}</p>
            <p className="navItemAuthor">By {poem.author}</p>
        </li>
    );
};

export default NavItem;
