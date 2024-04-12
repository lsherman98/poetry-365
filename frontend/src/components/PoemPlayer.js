import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './AudioPlayer.css'
import { WebVTTParser } from "webvtt-parser";

function PoemPlayer({ audioUrl, vttUrl }) {

    const [parsedVTT, setParsedVTT] = useState([])
    const [activeLine, setActiveLine] = useState(null)
    const parser = new WebVTTParser();

    useEffect(() => {
        fetch(vttUrl)
            .then((res) => res.text())
            .then((vttData) => {
                const parsedData = parser.parse(vttData);
                setParsedVTT(parsedData.cues);
            })
            .catch((err) =>
                console.log("Error fetching/parsing VTT file: ", err)
            );
    }, [vttUrl])

    const onListen = (e) => {
        const currentTime = e.srcElement.currentTime
        const currentLine = parsedVTT.find(line => {
            return currentTime < line.endTime + 1
        })
        setActiveLine(currentLine)
    }


    return (
        <div>
            <div>
                {parsedVTT.map((line, index) => {
                   return <p
                        key={index}
                        style={{ color: activeLine === line ? "red" : "black"}}
                    >{ line.text }</p>;
                })}
            </div>
            <AudioPlayer
                className="audioPlayer"
                autoPlay
                src={audioUrl}
                layout="stacked"
                customAdditionalControls={[]}
                listenInterval={1000}
                onListen={onListen}
            />
        </div>
    );
}

export default PoemPlayer;

