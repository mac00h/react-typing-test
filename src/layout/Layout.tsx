import React from "react";
import "./layout.scss";

export const Layout: React.FC = ({ children }) => {
  return <div className="layout">{children}</div>;
};
