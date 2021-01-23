import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = {
  name: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { name } = props;

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div className="container">
          <Link
            className="navbar-brand waves-effect"
            to="/"
          >
            {name}
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
