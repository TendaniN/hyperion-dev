import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { MENU_MAP } from "constants/index";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCaretDown } from "react-icons/fa";
import { ReactComponent as Logo } from "assets/logo.svg";

import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const StyledHeader = styled.div<{ top?: number }>`
  background-color: var(--very-dark-blue);
  display: flex;
  flex-direction: row;
  width: calc(100%-2rem);
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  top: ${({ top }) => (top ? top : 0)}rem;
  z-index: 2;
`;

const StyledMenu = styled.div`
  background-color: var(--very-dark-blue);
  display: flex;
  flex-direction: row;
  align-self: stretch;
  height: 2.5rem;
  position: relative;

  @media (max-width: 60em) {
    position: fixed;
    top: 0;
    height: 2.5rem;
    width: 100%;
    overflow-y: auto;
    background-color: var(--very-dark-blue);
    left: 0;
    bottom: 0;
  }

  .tab {
    font-size: var(--small);
    font-weight: 600;
    padding: 0;
    margin: 0.75rem 2.5rem auto 0 !important;
    text-align: center;
    padding: 0rem 1rem 0;
    gap: 0.5rem;
    border: none;
    background: none;
    float: left;
    text-decoration: none !important;
    max-width: 100px;

    &.dropdown {
      margin: 0rem 2.5rem auto 0 !important;
      height: 2.5rem;

      &:after {
        margin: 0.45rem -0.5rem 0 -0.5rem;
        display: block;
        content: "";
        border-bottom: 2px solid transparent;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 100% 50%;
      }

      .dropdown-toggle {
        margin: 0.75rem 0 auto 0 !important;
        background-color: transparent;
        border: none;
        font-size: var(--small);
        font-weight: 600;
        color: var(--white);
      }
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

const StyledDropdownMenu = styled(DropdownMenu)`
  background-color: var(--white);
  width: 18rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: var(--radii-small);
  margin-top: 0.55rem;
  margin-left: -0.5rem;
  display: none;

  &.show {
    display: block;
  }

  .dropdown-item {
    color: var(--charcoal);
    padding: 0.75rem 1rem;
    display: flex;
    text-decoration: none;
    text-align: left;
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

const LogoContainer = styled(Link)`
  width: 10.75rem;
  height: 2.5rem;

  svg {
    height: 100%;
    width: 100%;

    path,
    polygon {
      stroke: var(--white);
      fill: var(--white);
    }
  }
`;

export const Header = () => {
  const [showBanner, updateShowBanner] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      {showBanner ? <div></div> : <></>}
      <StyledHeader>
        <LogoContainer to="/">
          <Logo type="noText" />
        </LogoContainer>
        <StyledMenu>
          {MENU_MAP.map(({ label, link, submenu }, idx) =>
            submenu.length === 0 ? (
              <>
                <Link
                  to={link ? link : ""}
                  key={`menu-item-${idx}`}
                  className="tab"
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
                          to={link ? link : ""}
                          key={`submenu-heading-${idx}-item-${sidx}`}
                        >
                          {item.label}
                          {/* Added an arrow so a user knows they will be going somewhere */}
                          <FaArrowRight className="icon" />
                        </Link>
                        {item.submenu.length > 0 ? (
                          item.submenu.map((subitem, subidx) => (
                            <Link
                              className="dropdown-item"
                              to={link ? link : ""}
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
              </>
            ) : (
              <Dropdown
                className="tab"
                isOpen={dropdownOpen}
                onMouseLeave={() => setDropdownOpen(false)}
                onMouseOver={() => setDropdownOpen(true)}
              >
                <DropdownToggle
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  caret
                  aria-expanded={dropdownOpen}
                >
                  {label}
                  {submenu.length > 0 ? (
                    <FaCaretDown
                      style={{ color: "var(--gold)", margin: "auto 0.5rem" }}
                    />
                  ) : (
                    <></>
                  )}
                </DropdownToggle>
                <StyledDropdownMenu>
                  {submenu.map((item, sidx) => (
                    <>
                      <Link
                        className={`dropdown-item ${
                          item.submenu.length > 0 ? "heading" : ""
                        }`}
                        to={link ? link : ""}
                        key={`submenu-heading-${idx}-item-${sidx}`}
                      >
                        {item.label}
                        {/* Added an arrow so a user knows they will be going somewhere */}
                        <FaArrowRight className="icon" />
                      </Link>
                      {item.submenu.length > 0 ? (
                        item.submenu.map((subitem, subidx) => (
                          <Link
                            className="dropdown-item"
                            to={link ? link : ""}
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
                </StyledDropdownMenu>
              </Dropdown>
            )
          )}
        </StyledMenu>
        <div></div>
      </StyledHeader>
    </div>
  );
};
