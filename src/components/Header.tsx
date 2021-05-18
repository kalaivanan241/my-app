import React from "react";
import { Helmet } from "react-helmet";

export interface HeaderProps {
  title: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {!!description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default Header;
