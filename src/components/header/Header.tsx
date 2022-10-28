import { ClassNames } from '@emotion/react';
import { Sun, Moon } from '../../common/svg/svg';
import './header.scss';

type HeaderProps = {
  onToggleTheme: () => void;
};

const Header = ({ onToggleTheme }: HeaderProps) => {
  return (
    <ClassNames>
      {({ css, cx, theme }) => (
        <div
          className={cx(
            'header',
            css`
              background-color: ${theme.backgroundSecondary};
              color: ${theme.primaryText};
              box-shadow: ${theme.dark ? theme.headerDarkShadow : theme.headerLightShadow};
            `,
          )}
        >
          <h1 className="heading">Where in the world</h1>
          <div className="theme-btn" onClick={onToggleTheme}>
            {theme.dark ? (
              <>
                <Sun className="icon" />
                <p>Light mode</p>
              </>
            ) : (
              <>
                <Moon className="icon" />
                <p>Dark mode</p>
              </>
            )}
          </div>
        </div>
      )}
    </ClassNames>
  );
};

export { Header };
