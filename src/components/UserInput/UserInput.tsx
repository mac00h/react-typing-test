import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/redux-hooks";
import { TypingActions } from "../../store/typingStore";
import "./userInput.scss";
import { checkKeydown } from "../../helpers/check-keydown";

export const UserInput: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  // const [allowed, setAllowed] = useState<boolean>(true)
  const dispatch = useAppDispatch();

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.repeat) {
      return;
    }

    if (checkKeydown(e)) {
      dispatch(TypingActions.updateLetter(e.key));
      return;
    }

    if (e.code === "Space") {
      setCurrentWord("");
      dispatch(TypingActions.spaceClicked());
      return;
    }
  };

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
        onChange={(e) => setCurrentWord(e.target.value)}
      />
    </div>
  );
};
