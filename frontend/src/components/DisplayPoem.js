import React from "react";
import { useSelector } from "react-redux";
import "./DisplayPoem.css";
import PoemPlayer from "./PoemPlayer";

function DisplayPoem() {
    const poem = useSelector((state) => state.poemStore.selectedPoem);

    return (
        <div className="heroPoem">
            <p className="poemContainer">{poem.poem}</p>
            <PoemPlayer poem={poem}  />
        </div>
    );
}

export default DisplayPoem;

