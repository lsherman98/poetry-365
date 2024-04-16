import React from "react";
import "./InfoModal.css";

function InfoModal({ setShowModal }) {
    return (
        <div className="infoModalContainer">
            <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/100/delete-sign--v1.png"
                alt="delete-sign--v1"
                className="exitIcon"
                onClick={() => setShowModal(false)}
            />
            <div className="mainModalContent">
                <div className="aboutProject">
                    <p>
                        On April, 21, 2020,{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="modalLink"
                            href="https://channelmcgilchrist.com/home/"
                        >
                            Dr. Iain McGilchrist
                        </a>
                        , author of{" "}
                        <span className="modalSpan">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="modalLink"
                                href="https://www.amazon.com/Master-His-Emissary-Divided-Western/dp/0300188374"
                            >
                                The Master and His Emissary
                            </a>
                        </span>{" "}
                        and{" "}
                        <span className="modalSpan">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="modalLink"
                                href="https://www.amazon.com/Matter-Things-Brains-Delusions-Unmaking/dp/1914568060"
                            >
                                The Matter With Things
                            </a>
                        </span>
                        , recorded himself reading a poem and posted it on his
                        youtube channel. He continued to read a poem a day for
                        an entire year. This project has collected all of his
                        readings and synced them up with the poems themselves to
                        make it easy to listen and follow along at the same
                        time.
                    </p>
                </div>
                <div className="aboutMe">
                    <p>
                        Created by{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.levisherman.xyz"
                        >
                            Levi Sherman
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InfoModal;
