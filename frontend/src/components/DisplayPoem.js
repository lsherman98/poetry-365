import React from "react";
import { useSelector } from "react-redux";
import "./DisplayPoem.css";

function DisplayPoem() {
    const poem = useSelector((state) => state.poemStore.selectedPoem);

    return (
        <div className="heroPoem">
            <p className="poemContainer">{poem.poem}</p>
        </div>
    );
}

export default DisplayPoem;
