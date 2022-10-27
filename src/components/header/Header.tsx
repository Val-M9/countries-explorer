import { FC } from 'react';
import { Sun, Moon } from '../../common/svg/svg';
import '../../styles/base.scss';
import './header.scss';

const Header: FC = () => {
  return (
    <div className="header content">
      <h1 className="heading">Where in the world</h1>
      <div className="mode-btn">
        <Sun className="icon" />
        <p>Light mode</p>
      </div>
    </div>
  );
};

export { Header };
