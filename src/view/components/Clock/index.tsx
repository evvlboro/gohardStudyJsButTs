// Core
import React, { useEffect, useState } from 'react';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
let intervalId: ReturnType<typeof setInterval> | void = void 0;

export const Clock = () => {
    const [ time, setTime ] = useState('');
    useEffect(() => {
        intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);


    return (
        <div>
            <h2>It is {time}.</h2>
        </div>
    );
};
