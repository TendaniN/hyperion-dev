import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const MenuButton = styled.button.attrs({
  type: "button",
})`
  color: var(--white);
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  margin: 0 0.75rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1.75rem;
  right: -1.75rem;
  z-index: 999;

  height: 1.6rem;
  width: 1.6rem;
  background: var(--white);
  border-radius: var(--radii-round);
  box-shadow: var(--shadow-normal);

  &:hover {
    box-shadow: var(--shadow-elavated);
    cursor: pointer;
  }

  & svg {
    height: 1.2rem;
    margin: auto;
  }

  @media (max-width: 60em) {
    display: none;
  }
`;

export const SideNavbarContainer = styled.div`
  height: calc(100vh - 1rem);
  width: 100%;
  display: flex;
  flex-basis: 18%;
  flex-direction: column;
  font-size: var(--font-size-small);
  padding: 0.5rem;
  transition: visibility 0.1s ease, opacity 0.1s ease;

  background-color: var(--dark-blue);
  color: var(--white);

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: var(--blue) !important;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    width: 100%;
  }

  &.closed {
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: 60em) {
    position: fixed;
    height: 48px;
    overflow: hidden;
    max-width: unset;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: var(--shadow-normal);
    z-index: 999;
  }
`;

export const Content = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 400ms ease-in-out;
  margin-top: 1rem;
  z-index: 99;

  @media (max-width: 60em) {
    position: fixed;
    top: 3rem;
    height: calc(100% - 3rem);
    overflow-y: auto;
    background: var(--dark-blue);
    width: 13rem;
    padding: 0 0.5rem;
    left: 0;
    bottom: 0;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-150%")});
  }
`;

export const LogoContainer = styled(Link)<{ height?: string; width?: string }>`
  height: ${(props) => props.height || "2.5rem"} !important;
  width: ${(props) => props.width || "10.75rem"} !important;
  padding: 0.25rem;
  margin: 0.5rem;
  margin-left: auto;
  margin-right: auto;

  svg {
    height: 100%;
    width: 100%;

    path,
    polygon {
      stroke: var(--white);
      fill: var(--white);
    }
  }

  @media (max-width: 60em) {
    height: 48px;
    width: 48px;
    margin: 0 0.5rem;
    padding: 0;
  }
`;

export const SideNavOption = styled.div`
  margin: 0.3rem 0;
  padding: 0.75rem 1rem;
  width: 100%;
  border-radius: var(--radii-small);
  cursor: pointer;

  display: flex;
  flex-direction: row;
  position: relative;
  transition: background-color 100ms ease-in-out;

  :hover,
  &[aria-current="page"] {
    background-color: var(--very-dark-blue);
  }

  button {
    padding: 0;
  }

  @media (max-width: 60em) {
    padding: 0.5rem 1rem;
    font-size: var(--small-x);
  }
`;

export const SideNavText = styled.p`
  margin: auto 0;
  font-size: var(--small);
  font-weight: 600;
  font-family: var(--MontserratRegular);
  flex-grow: 1;
  text-align: left;

  @media (max-width: 60em) {
    font-size: var(--small-x);
  }
`;

export const SubMenuOptions = styled.div`
  max-height: 0;
  opacity: 0;
  transition: max-height 0.15s ease-out;
  overflow-x: hidden;

  color: var(--charcoal);
  text-decoration: none;
  text-align: left;
  font-size: var(--small-x);

  .dropdown-item {
    color: var(--charcoal);
    padding: 0.5rem 1.5rem;
    display: flex;
    text-decoration: none;
    text-align: left;
    font-size: var(--small-x);
    border-radius: none;

    &.heading {
      font-weight: 600;
      padding: 0.5rem 1rem;
      color: var(--dark-moderate-blue);
    }

    &:last-of-type {
      border-radius: 0 0 var(--radii-small) var(--radii-small);
    }

    &:first-of-type {
      border-radius: var(--radii-small) var(--radii-small) 0 0;
    }

    &:hover {
      background-color: var(--strong-soft-blue);
    }
  }

  &.open {
    max-height: 20rem;
    opacity: 1;
    transition: max-height 0.15s ease-in;
  }
  & a {
    margin: 0.2rem 0;
    padding: 0.2rem 0.4rem;
    border-radius: var(--small-x);

    &.active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export const SubMenuContainer = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  background-color: var(--white);
  border-radius: var(--radii-small);
  margin-top: -0.25rem;
  max-height: 30rem;
  z-index: 1;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background-color: var(--white) !important;
    width: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--chathams-blue);
    opacity: 0.25;
    border-radius: var(--radii-small);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  transition: width 0.2s ease;
  width: 220px;
  background-color: var(--dark-blue);

  &.closed {
    width: 3.5rem;
  }

  @media (max-width: 60em) {
    background-color: unset;
    width: unset;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SideNavBottomContainer = styled.div`
  margin: auto 0 1rem 0;

  & .min-side-link button {
    padding: 0.5rem 0.3rem;
  }
`;

export const SideNavOptionBottom = styled(SideNavOption)`
  margin: 0.1rem 0;
  padding: 0.75rem 1rem;

  &.active-button {
    background-color: var(--gold);
    color: var(--charcoal);
    width: 100%;
    box-shadow: var(--shadow-normal);

    :hover {
      outline: 2px solid var(--white);
      transform: scale(1.02);
      color: var(--white);
    }
  }

  @media (max-width: 60em) {
    padding: 0.5rem 1rem;
    font-size: var(--small-x);
  }
`;
