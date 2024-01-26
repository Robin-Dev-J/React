import { useEffect, useState } from "react";

const CricketClub = () => {
    const [message, setMessage] = useState(
        "Welcome to the Cricket Club! Enjoy the game and stay active."
    );

    const updateMessagePlay = () => {
        setMessage("Thanks for playing cricket! Keep enjoying the sport.");
    };

    const updateMessageWatch = () => {
        setMessage("Enjoy watching the cricket match! Cheer for your favorite team.");
    };

    const updateMessageLearn = () => {
        setMessage("Interested in learning cricket? Practice and improve your skills.");
    };

    useEffect(() => {
        console.log("Side effect triggered");
    }, [message]);

    return (
        <div>
            <h1>{message}</h1>
            <button style={button1} onClick={updateMessagePlay}>
                Click me if you want to play cricket
            </button>
            <button style={button2} onClick={updateMessageWatch}>
                Click me if you want to watch a cricket match
            </button>
            <button  style={button3} onClick={updateMessageLearn}>
                Click me if you want to learn cricket
            </button>
        </div>

    );

};

const button1 = {
    padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#e74c3c',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          
  };

  const button2 = {
    padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#3498db',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
  };

  const button3 = {
    padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#e74c3c',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
  };

export default CricketClub;
