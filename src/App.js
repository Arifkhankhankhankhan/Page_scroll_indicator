import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollHeight = document.body.scrollHeight;
        const innerHeight = window.innerHeight;
        const percentage = (scrollY / (scrollHeight - innerHeight)) * 100;
        setScrollWidth(percentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="scrollbar" style={{ width: `${scrollWidth}%` }}></div>
            <div className="container">
                {Array.from({ length: 50 }, (_, i) => (
                    <div className="cards" key={i}>{i + 1}</div>
                ))}
            </div>
        </div>
    );
};

export default App;
