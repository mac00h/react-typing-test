import React from "react";
import { Text } from "../Text/Text";
import { UserInput } from "../UserInput/UserInput";
import "./typing.scss";

interface TypingProps {}

export const Typing: React.FC<TypingProps> = ({}) => {
  return (
    <div className="typing-comp-wrapper">
      <Text />
      <UserInput />
    </div>
  );
};
