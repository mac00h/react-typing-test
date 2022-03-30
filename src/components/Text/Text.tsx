import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import "./Text.scss";

interface TextProps {}
let text =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Duis euismod id nunc ac imperdiet Maecenas accumsan dignissim magna quis suscipit odio mattis in Proin aliquam vitae mi eget viverra Donec tristique vitae est eget dapibus Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos Sed finibus varius semper";

export const Text: React.FC<TextProps> = ({}) => {
  const [arrText, setArrText] = useState<string[]>(text.split(" "));
  const [currentWordCheck, setCurrentWordCheck] = useState<string>();

  const { currentLetter } = useAppSelector((state) => state.typingStore);

  useEffect(() => {
    setCurrentWordCheck(arrText[0]);
  }, [arrText]);

  useEffect(() => {
    if (currentLetter === "space") {
      setArrText((prevState) => {
        return prevState.slice(1);
      });
    }
  }, [currentLetter]);

  return (
    <div className="text-wrapper">
      <h2>
        {arrText.map((e) => {
          return (
            <div
              style={currentWordCheck === e ? { color: "red" } : undefined}
            >{`\t ${e}`}</div>
          );
        })}
      </h2>
    </div>
  );
};
