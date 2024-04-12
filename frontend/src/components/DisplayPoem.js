import React from "react";
import { useSelector } from "react-redux";
import "./DisplayPoem.css";
import PoemPlayer from "./PoemPlayer";

function DisplayPoem() {
    const poem = useSelector((state) => state.poemStore.selectedPoem);
    const vttUrl = poem.poem_timestamps

    return (
        <div className="heroPoem">
            {/* <p className="poemContainer">{poem.poem}</p> */}
            <PoemPlayer audioUrl={poem.audio}  vttUrl={vttUrl} />
        </div>
    );
}

export default DisplayPoem;

