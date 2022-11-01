import { css } from '@emotion/react';

export const center = css`
  display: flex;
  justify-content: center;
  transform: translateY(40vh);
`;

export const ldsRing = css`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid rgb(49, 121, 123);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: rgb(49, 121, 123) transparent transparent transparent;

    :nth-of-type(1) {
      animation-delay: -0.45s;
    }
    :nth-of-type(2) {
      animation-delay: -0.3s;
    }
    :nth-of-type(3) {
      animation-delay: -0.15s;
    }
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
