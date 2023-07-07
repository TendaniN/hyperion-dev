import React, { useState } from "react";
import styled from "styled-components/macro";
import { MENU_MAP } from "constants/index";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCaretDown } from "react-icons/fa";

const StyledHeader = styled.div<{ top?: number }>`
  background-color: var(--very-dark-blue);
  width: 100%;
  justify-content: space-between;
  position: sticky;
  top: ${({ top }) => (top ? top : 0)}rem;
  z-index: 2;
`;

const StyledMenu = styled.div`
  background-color: var(--very-dark-blue);
  display: flex;
  flex-direction: row;
  align-self: stretch;
  display: flex;
  position: relative;

  .tab {
    font-size: var(--small);
    font-weight: 600;
    margin-right: 2.25rem !important;
    padding: 0;
    text-align: center;
    padding: 0.625rem 1rem 0;
    gap: 0.5rem;
    border: none;
    background: none;
    float: left;
    text-decoration: none !important;

    &.dropdown:hover ~ .dropdown-menu {
      display: block;
    }

    &,
    &:hover {
      color: var(--white);
    }

    &:hover {
      &:after {
        border-bottom: 2px solid var(--gold);
        transform: scaleX(1.02);
        transform-origin: 0% 50%;
      }
    }

    &.active {
      color: var(--gold);

      &:after {
        border-bottom: 2px solid var(--gold);
        transform: scaleX(1.02);
        transform-origin: 0% 50%;
      }
    }

    &:after {
      margin: 0.625rem -0.5rem 0 -0.5rem;
      display: block;
      content: "";
      border-bottom: 2px solid transparent;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin: 100% 50%;
    }

    @media screen and (max-width: 50em) {
      font-size: var(--small-x);
    }
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: var(--white);
  width: 15rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 2.5rem;
  border-radius: var(--radii-small);

  &:hover {
    display: block;
  }

  .dropdown-item {
    color: var(--charcoal);
    padding: 0.75rem 1rem;
    display: flex;
    text-decoration: none;
    font-size: var(--small-x);

    .icon {
      display: none;
      margin-left: 0.5rem;
      margin-top: 0.15rem;
    }

    &:last-of-type {
      border-radius: 0 0 var(--radii-small) var(--radii-small);
    }

    &:first-of-type {
      border-radius: var(--radii-small) var(--radii-small) 0 0;
    }

    &.heading {
      font-weight: 600;
      color: var(--dark-moderate-blue);
    }

    &:hover {
      background-color: var(--strong-soft-blue);

      .icon {
        display: block;
        animation: hovericon 50ms ease-in-out;
      }
    }
  }

  @keyframes hovericon {
    from {
      margin-left: 0;
    }
    to {
      margin-left: 0.5rem;
    }
  }
`;

export const Header = () => {
  const [showBanner, updateShowBanner] = useState(true);

  return (
    <div>
      {showBanner ? <div></div> : <></>}
      <StyledHeader>
        <div></div>
        <StyledMenu>
          {MENU_MAP.map(({ label, link, submenu }, idx) => (
            <div className="menu-item">
              <Link
                to={link}
                key={`menu-item-${idx}`}
                className={`tab ${submenu.length > 0 ? "dropdown" : ""}`}
                onClick={link ? null : (event) => event.preventDefault()}
              >
                {label}
                {submenu.length > 0 ? (
                  <FaCaretDown
                    style={{ color: "var(--gold)", margin: "auto 0.5rem" }}
                  />
                ) : (
                  <></>
                )}
              </Link>
              {submenu.length > 0 ? (
                <DropdownMenu className="dropdown-menu">
                  {submenu.map((item, sidx) => (
                    <>
                      <Link
                        className={`dropdown-item ${
                          item.submenu.length > 0 ? "heading" : ""
                        }`}
                        to={link}
                        key={`submenu-${idx}-item-${sidx}`}
                      >
                        {item.label}
                        {/* Added an arrow so a user knows they will be going somewhere */}
                        <FaArrowRight className="icon" />
                      </Link>
                      {item.submenu.length > 0 ? (
                        item.submenu.map((subitem, subidx) => (
                          <Link
                            className="dropdown-item"
                            to={link}
                            key={`submenu-${sidx}-item-${subidx}`}
                          >
                            {subitem.label}
                            <FaArrowRight className="icon" />
                          </Link>
                        ))
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </DropdownMenu>
              ) : (
                <></>
              )}
            </div>
          ))}
        </StyledMenu>
        <div></div>
      </StyledHeader>
    </div>
  );
};
