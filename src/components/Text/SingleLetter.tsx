import React, { useEffect, useState } from "react";
import "./singleLetter.scss";

interface SingleLetterProps {
  coords: { x: number; y: number };
  letter: string;
  map: { x: number; y: number; letter: string }[];
}

export const SingleLetter: React.FC<SingleLetterProps> = ({
  coords,
  letter,
  map,
}) => {
  const [correct, setCorrect] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  //check on map change -> if we use backspace we change map also => affects letter color
  useEffect(() => {
    if (map.length > 0) {
      for (let key of map) {
        if (key.x === coords.x && key.y === coords.y) {
          setActive(true);
          if (letter === key.letter) {
            setCorrect(true);
          }
        }
      }
    }
  }, [map, coords.x, coords.y, letter]);

  return (
    <div
      style={
        active
          ? correct
            ? { color: "limegreen" }
            : { color: "red" }
          : { color: "gray" }
      }
      className="letter"
    >
      {letter}
    </div>
  );
};
