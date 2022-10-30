/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { Sun, Moon } from '../../common/svg/svg';
import { header, heading, themeBtn, icon } from './styles';

type HeaderProps = {
  onToggleTheme: () => void;
};

const Header = ({ onToggleTheme }: HeaderProps) => {
  const theme = useTheme();
  return (
    <div css={header}>
      <h1 css={heading}>Where in the world</h1>
      <div css={themeBtn} onClick={onToggleTheme}>
        {theme.dark ? (
          <>
            <div css={icon}>
              <Sun />
            </div>
            <p>Light mode</p>
          </>
        ) : (
          <>
            <div css={icon}>
              <Moon />
            </div>
            <p>Dark mode</p>
          </>
        )}
      </div>
    </div>
  );
};

export { Header };
