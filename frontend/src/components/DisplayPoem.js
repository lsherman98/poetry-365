import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayPoem.css";
import PoemPlayer from "./PoemPlayer";
import { getDailyPoem } from "../store/features/poemSlice";

function DisplayPoem() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDailyPoem())
    }, [])
    
    const poem = useSelector((state) => state.poemStore.selectedPoem);
    const vttUrl = poem.poem_timestamps

    return (
        <>
            {poem && <PoemPlayer poemText={poem.poem} audioUrl={poem.audio}  vttUrl={vttUrl} poem={poem}/>}
        </>
    );
}

export default DisplayPoem;

