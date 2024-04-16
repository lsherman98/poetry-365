import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css";
import { WebVTTParser } from "webvtt-parser";
import "./DisplayPoem.css";
import { useDispatch } from "react-redux";
import { getDailyPoem } from "../store/features/poemSlice";
import InfoModal from "./InfoModal";

function PoemPlayer({ poemText, audioUrl, vttUrl, poem }) {
    const dispatch = useDispatch();
    const [parsedVTT, setParsedVTT] = useState([]);
    const [activeLine, setActiveLine] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const poemContainerRef = useRef(null);
    const audioPlayerRef = useRef(null);

    useEffect(() => {
        const parser = new WebVTTParser();
        fetch(vttUrl)
            .then((res) => res.text())
            .then((vttData) => {
                const parsedData = parser.parse(vttData);
                setParsedVTT(parsedData.cues);
            })
            .catch((err) =>
                console.log("Error fetching/parsing VTT file: ", err)
            );
    }, [vttUrl]);

    const onListen = (e) => {
        const currentTime = e.srcElement.currentTime;
        const currentLine = parsedVTT.find((line) => {
            return currentTime < line.endTime + 0.5;
        });
        setActiveLine(currentLine);
        if (!isScrolling) {
            scrollToActiveLine();
        }
    };

    const scrollToActiveLine = () => {
        const activeLineElement = document.querySelector(`.activeLine`);
        if (activeLineElement) {
            const containerRect =
                poemContainerRef.current.getBoundingClientRect();
            const lineRect = activeLineElement.getBoundingClientRect();
            const threshold = 100;

            if (
                lineRect.bottom > containerRect.bottom - threshold ||
                lineRect.top < containerRect.top - threshold
            ) {
                activeLineElement?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        }
    };

    const handleLineClick = (e) => {
        const targetLine = parsedVTT.find(
            (line) => line.text === e.target.innerText
        );
        const lineStartTime = targetLine?.startTime;
        if (audioPlayerRef.current && lineStartTime) {
            setActiveLine(targetLine);
            audioPlayerRef.current.audio.current.currentTime = lineStartTime;
        }
    };

    const goToTodaysPoem = () => {
        dispatch(getDailyPoem());
    };

    const handleScroll = () => {
        setIsScrolling(true);
        const scrollTimeout = () => {
            setTimeout(() => {
                setIsScrolling(false);
            }, 2000); 
        }
        clearTimeout(scrollTimeout);
        scrollTimeout()
    };

    return (
        <>
            {showModal && <InfoModal setShowModal={setShowModal} />}
            <div className="poemPlayerContainer">
                <div className="buttons">
                    <div className="todaysPoem" onClick={goToTodaysPoem}>
                        <span>Poem of the day</span>
                    </div>
                    <img
                        className="information"
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios/100/info--v1.png"
                        alt="info--v1"
                        onClick={() => setShowModal(true)}
                    />
                </div>
                <div className="poemContainer">
                    <div className="poemText" ref={poemContainerRef} onScroll={handleScroll}>
                        {poemText &&
                            poemText.split("\n").map((line, index) => {
                                if (line === "") {
                                    return <br key={index}></br>;
                                }
                                return (
                                    <p
                                        key={index}
                                        onClick={handleLineClick}
                                        className={
                                            activeLine?.text === line
                                                ? "activeLine"
                                                : ""
                                        }
                                    >
                                        {line}
                                    </p>
                                );
                            })}
                    </div>
                </div>
                <div className="poemTitle">
                    <h3>{poem.title}</h3>
                    <p>By {poem.author}</p>
                </div>
                <div className="audioPlayerContainer">
                    <AudioPlayer
                        ref={audioPlayerRef}
                        className="audioPlayer"
                        src={audioUrl}
                        layout="stacked"
                        customAdditionalControls={[]}
                        listenInterval={1000}
                        onListen={onListen}
                        onSeeked={onListen}
                        // autoPlayAfterSrcChange={false}
                    />
                </div>
            </div>
        </>
    );
}

export default PoemPlayer;
