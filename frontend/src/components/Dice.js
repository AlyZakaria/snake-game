import React, { useState } from "react";

const Dice = ({ diceValue, onDiceRoll }) => {
  // const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      onDiceRoll(newValue);
      setRolling(false);
    }, 1000);
  };

  const renderDiceDots = () => {
    let dots = [];

    switch (diceValue) {
      case 1:
        dots.push(<span key={1} className="dot dot-center" />);
        break;
      case 2:
        dots.push(<span key={1} className="dot dot-top-left" />);
        dots.push(<span key={2} className="dot dot-bottom-right" />);
        break;
      case 3:
        dots.push(<span key={1} className="dot dot-top-left" />);
        dots.push(<span key={2} className="dot dot-center" />);
        dots.push(<span key={3} className="dot dot-bottom-right" />);
        break;
      case 4:
        dots.push(<span key={1} className="dot dot-top-left" />);
        dots.push(<span key={2} className="dot dot-top-right" />);
        dots.push(<span key={3} className="dot dot-bottom-left" />);
        dots.push(<span key={4} className="dot dot-bottom-right" />);
        break;
      case 5:
        dots.push(<span key={1} className="dot dot-top-left" />);
        dots.push(<span key={2} className="dot dot-top-right" />);
        dots.push(<span key={3} className="dot dot-center" />);
        dots.push(<span key={4} className="dot dot-bottom-left" />);
        dots.push(<span key={5} className="dot dot-bottom-right" />);
        break;
      case 6:
        dots.push(<span key={1} className="dot dot-top-left" />);
        dots.push(<span key={2} className="dot dot-top-right" />);
        dots.push(<span key={3} className="dot dot-middle-left" />);
        dots.push(<span key={4} className="dot dot-middle-right" />);
        dots.push(<span key={5} className="dot dot-bottom-left" />);
        dots.push(<span key={6} className="dot dot-bottom-right" />);
        break;
      default:
        break;
    }

    return dots;
  };

  return (
    <div>
      <div
        className={`dice ${rolling ? "rolling" : ""} w-16 h-16 p-2`}
        onClick={rollDice}
      >
        {renderDiceDots()}
      </div>
      <p className="text-center mt-4">Dice Value: {diceValue}</p>
    </div>
  );
};

export default Dice;
