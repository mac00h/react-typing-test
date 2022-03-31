import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { SingleLetter } from "./SingleLetter";
import { mapText } from "../../helpers/map-text";
import { generateKey } from "../../helpers/generate-key";
import "./Text.scss";
import { TypingActions } from "../../store/typingStore";

let text =
  "If you cannot understand why someone did something, look at the consequences—and infer the motivation.";

let textmap = mapText(text.split(" "));

const notEmptySpaceBackspace = (a: string) => {
  return a !== "" && a !== "space" && a !== "Backspace";
};

export const Text: React.FC = () => {
  const [arrText, setArrText] = useState<string[]>(text.split(" "));
  const [currentMap, setCurrentMap] = useState(textmap);
  const [newMap, setNewMap] = useState<
    { x: number; y: number; letter: string }[]
  >([]);

  const dispatch = useAppDispatch();

  const { currentLetter, updated } = useAppSelector(
    (state) => state.typingStore
  );

  useEffect(() => {
    console.log(newMap);
    console.log(currentMap);
  }, [currentMap, newMap]);

  //create map as you type!
  useEffect(() => {
    if (!updated) {
      return;
    }

    if (currentLetter === "space") {
      // setArrText((prevState) => prevState.slice(1));
    }

    if (currentLetter === "Backspace") {
      let newObj = newMap[newMap.length - 1];
      newObj.letter = "";

      setCurrentMap((prevState) => {
        return [newObj, ...prevState];
      });

      setNewMap((prevMap) => {
        return prevMap.slice(0, -1);
      });
    }

    if (notEmptySpaceBackspace(currentLetter)) {
      let newObj = currentMap[0];
      newObj.letter = currentLetter;

      setNewMap((prevMap) => {
        return [...prevMap, newObj];
      });

      setCurrentMap((prevState) => {
        return prevState.slice(1);
      });
    }

    dispatch(TypingActions.letterAdded());
  }, [currentLetter, updated, dispatch, currentMap]);

  return (
    <div className="text-wrapper">
      <h2>
        {arrText.map((e, x) => {
          let word = e.split("");
          return (
            <div className="word" key={x}>
              {word.map((letter, y) => (
                <SingleLetter
                  key={generateKey(letter)}
                  coords={{ x, y }}
                  letter={letter}
                  map={newMap}
                />
              ))}
            </div>
          );
        })}
      </h2>
    </div>
  );
};
