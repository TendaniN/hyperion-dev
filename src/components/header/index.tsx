import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components/macro";
import { MENU_MAP } from "constants/index";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCaretDown } from "react-icons/fa";
import {
  RxHamburgerMenu as MenuIcon,
  RxCross2 as CloseIcon,
  RxChevronDown as ChevronDownIcon,
  RxChevronRight as ChevronRightIcon,
} from "react-icons/rx";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useClickAway, useEvent, useMedia, useToggle } from "react-use";

import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import {
  Wrapper,
  ToggleContainer,
  SideNavbarContainer,
  HeaderToo,
  LogoContainer,
  MenuButton,
  Content,
  SideNavOption,
  SideNavText,
  SubMenuContainer,
  SubMenuOptions,
} from "./style";

export const Header = () => {
  const menuRef = useRef(null);

  const [showBanner, updateShowBanner] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useToggle(false);
  const [showMenu, toggleShowMenu] = useToggle(false);
  const [showNav, toggleShowNav] = useToggle(true);
  const [subMenuOpen, updateSubMenuOpen] = useState(true);

  const isSmallDevice = useMedia("screen and (max-width: 60em)");

  const handleToggleNavKeyDown = useCallback(({ key }) => {
    if (key === "[") {
      toggleShowNav();
    }
  }, []);

  useEvent("keydown", handleToggleNavKeyDown);

  useClickAway(menuRef, () => {
    toggleShowMenu(false);
  });

  return (
    <>
      <Wrapper className={`${!showNav && "closed"}`}>
        <ToggleContainer onClick={() => toggleShowNav()}>
          {showNav ? (
            <CloseIcon style={{ transform: "rotate(90deg)" }} />
          ) : (
            <MenuIcon />
          )}
        </ToggleContainer>
        <SideNavbarContainer
          className={`${!showNav && "closed"} voyc-scrollbar-light`}
          id="sidebar"
          ref={menuRef}
        >
          <HeaderToo>
            <LogoContainer to="/">
              <Logo type="noText" />
            </LogoContainer>
            {isSmallDevice && (
              <MenuButton
                aria-expanded={showMenu}
                aria-controls="menu"
                onClick={() => toggleShowMenu()}
                aria-label="menu"
              >
                {showMenu ? <CloseIcon /> : <MenuIcon />}
              </MenuButton>
            )}
          </HeaderToo>
          <Content id="menu" isOpen={showMenu}>
            <div style={{ flexDirection: "column", display: "flex" }}>
              {MENU_MAP.map((item) => (
                <div
                  onMouseOver={
                    item.submenu.length > 0
                      ? () => updateSubMenuOpen(true)
                      : () => {}
                  }
                  onMouseLeave={() => updateSubMenuOpen(false)}
                >
                  <Link to="/">
                    <SideNavOption>
                      <SideNavText>{item.label}</SideNavText>
                      {item.submenu.length > 0 &&
                        (subMenuOpen ? (
                          <ChevronDownIcon />
                        ) : (
                          <ChevronRightIcon />
                        ))}
                    </SideNavOption>
                  </Link>
                  {item.submenu.length > 0 && subMenuOpen && (
                    <SubMenuContainer>
                      <SubMenuOptions
                        className={`submenu ${
                          subMenuOpen ? "open" : undefined
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <>
                            <Link
                              className={`dropdown-item ${
                                item.submenu.length > 0 ? "heading" : ""
                              }`}
                              to={subItem.link ? subItem.link : ""}
                            >
                              {subItem.label}
                            </Link>
                            {item.submenu.length > 0 ? (
                              item.submenu.map(({ label, link }, subidx) => (
                                <Link
                                  className="dropdown-item"
                                  to={link ? link : ""}
                                >
                                  {label}
                                </Link>
                              ))
                            ) : (
                              <></>
                            )}
                          </>
                        ))}
                      </SubMenuOptions>
                    </SubMenuContainer>
                  )}
                </div>
              ))}
            </div>
          </Content>
        </SideNavbarContainer>
      </Wrapper>
    </>
  );
};
