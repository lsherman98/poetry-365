import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './AudioPlayer.css'

function PoemPlayer({ poem }) {
    return (
        <div>
            <AudioPlayer
                className="audioPlayer"
                autoPlay
                src={poem.audio}
                layout="stacked"
                customAdditionalControls={[]}
            />
        </div>
    );
}

export default PoemPlayer;

// "stacked" | "horizontal" | "stacked-reverse" | "horizontal-reverse";
