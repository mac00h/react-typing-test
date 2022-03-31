import React from "react";
import { Text } from "../Text/Text";
import { UserInput } from "../UserInput/UserInput";
import "./typing.scss";

export const Typing: React.FC = () => {
  return (
    <div className="typing-comp-wrapper">
      <Text />
      <UserInput />
    </div>
  );
};
