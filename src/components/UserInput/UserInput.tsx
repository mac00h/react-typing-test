import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/redux-hooks";
import { TypingActions } from "../../store/typingStore";
import "./userInput.scss";

interface UserInputProps {}

export const UserInput: React.FC<UserInputProps> = ({}) => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentWord(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.code !== "Space") {
      dispatch(TypingActions.updateLetter(e.key));
      return;
    }

    setCurrentWord("");
    dispatch(TypingActions.spaceClicked());
    return;
  };

  //handleSpacebar
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div>
      <input
        className="user-input"
        autoFocus
        onBlur={(e) => e.currentTarget.focus()}
        value={currentWord}
        onChange={(e) => handleTyping(e)}
      />
    </div>
  );
};
