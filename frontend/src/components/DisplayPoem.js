import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayPoem.css";
import PoemPlayer from "./PoemPlayer";
import { getDailyPoem, getPoemByDay } from "../store/features/poemSlice";
import { useParams, useNavigate } from "react-router-dom";

function DisplayPoem() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { day } = useParams();

    useEffect(() => {
        const dayNumber = parseInt(day)

        if (
            dayNumber &&
            !isNaN(dayNumber) &&
            dayNumber >= 1 &&
            dayNumber <= 365
        ) {
            dispatch(getPoemByDay(day));
        } else {
            dispatch(getDailyPoem()).then((poem) => {
                navigate(`/${poem.payload.day}`);
            });
        }
    }, []);

    const poem = useSelector((state) => state.poemStore.selectedPoem);
    const vttUrl = poem.poem_timestamps;

    return (
        <>
            {poem && (
                <PoemPlayer
                    poemText={poem.poem}
                    audioUrl={poem.audio}
                    vttUrl={vttUrl}
                    poem={poem}
                />
            )}
        </>
    );
}

export default DisplayPoem;
