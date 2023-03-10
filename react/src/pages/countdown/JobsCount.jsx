import React, { useEffect, useState } from "react";
import moment from 'moment';

const ExpertsCount = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [showSemicolon, setShowSemicolon] = useState(false);

    useEffect(() => {
        setInterval(() => {
            const now = moment();
            const then = moment("2023-04-09 18:00:00", "YYYY-MM-DD hh:mm:ss");
            const countdown = moment(then - now);
            setDays(countdown.format("D"));
            setHours(countdown.format("HH"));
            setMinutes(countdown.format("mm"));
            setSeconds(countdown.format("ss"));
        }, 1000);
    }, []);

    return (
        <div className="experts-countdown-wrapper">
            <>
                <h1 className="title">Countdown Timer</h1>
                <div className="timer-container">
                    <div className="timer">
                        {days}
                        <span>days</span>
                    </div>
                    {showSemicolon ? <div className="semicolon">:</div> : null}
                    <div className="timer">
                        {hours}
                        <span>hour</span>
                    </div>
                    {showSemicolon ? <div className="semicolon">:</div> : null}
                    <div className="timer">
                        {minutes}
                        <span>minute</span>
                    </div>
                    {showSemicolon ? <div className="semicolon">:</div> : null}
                    <div className="timer">
                        {seconds}
                        <span>second</span>
                    </div>
                </div>
            </>
        </div>
    );
};

export default ExpertsCount;
