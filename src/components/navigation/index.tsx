import React, { useCallback, useRef, useState } from "react";
import { MENU_MAP } from "constants/index";
import { Link, useLocation } from "react-router-dom";
import {
  RxHamburgerMenu as MenuIcon,
  RxCross2 as CloseIcon,
  RxChevronDown as ChevronDownIcon,
  RxChevronRight as ChevronRightIcon,
} from "react-icons/rx";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useClickAway, useEvent, useMedia, useToggle } from "react-use";

import {
  Wrapper,
  ToggleContainer,
  SideNavbarContainer,
  StyledHeader,
  LogoContainer,
  MenuButton,
  Content,
  SideNavOption,
  SideNavText,
  SubMenuContainer,
  SubMenuOptions,
  SideNavBottomContainer,
  SideNavOptionBottom,
} from "./style";

export const SideNav = () => {
  const menuRef = useRef(null);
  const location = useLocation();

  const [showBanner, updateShowBanner] = useState(true);
  const [showMenu, toggleShowMenu] = useToggle(false);
  const [showNav, toggleShowNav] = useToggle(true);
  const [subMenuOpen, updateSubMenuOpen] = useToggle(false);
  const [showJoinModal, updateShowJoinModal] = useToggle(false);

  const isSmallDevice = useMedia("screen and (max-width: 60em)");

  const handleToggleNavKeyDown = useCallback(({ key }) => {
    if (key === "[") {
      toggleShowNav();
    }
  }, []);

  const handleShowSubMenu = (hasSubmenu = false) => {
    if (hasSubmenu) {
      updateSubMenuOpen(true);
    } else {
      updateSubMenuOpen(false);
    }
  };

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
          className={`${!showNav && "closed"} scrollbar`}
          id="sidebar"
          ref={menuRef}
        >
          <StyledHeader>
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
          </StyledHeader>
          <Content id="menu" isOpen={showMenu}>
            <div style={{ flexDirection: "column", display: "flex" }}>
              {MENU_MAP.map((item) => (
                <div
                  key={`menu-item-${item.label}`}
                  // can make it on hover but would update onClick to handleShowSubMenu so it still works in mobile version.
                  // onMouseOver={() => handleShowSubMenu(item.submenu.length > 0)}
                  // onMouseLeave={() => updateSubMenuOpen(false)}
                  onClick={() => updateSubMenuOpen()}
                >
                  <Link to="/" onClick={(event) => event.preventDefault()}>
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
                        {item.submenu.map((subItem) => {
                          const isActive =
                            location.pathname === `/${subItem.link}`;
                          return (
                            <>
                              <Link
                                className={`dropdown-item ${
                                  subItem.submenu.length > 0 ? "heading" : ""
                                }${isActive ? " active" : ""}`}
                                aria-current={isActive ? "location" : undefined}
                                key={`submenu-item-${subItem.label}`}
                                to={`/${subItem.link ? subItem.link : ""}`}
                              >
                                {subItem.label}
                              </Link>
                              {subItem.submenu.length > 0 &&
                                subItem.submenu.map(({ label, link }) => (
                                  <Link
                                    className={`dropdown-item ${
                                      location.pathname === `/${link}`
                                        ? " active"
                                        : ""
                                    }`}
                                    key={`submenu-item-${label}`}
                                    to={`/${link ? link : ""}`}
                                  >
                                    {label}
                                  </Link>
                                ))}
                            </>
                          );
                        })}
                      </SubMenuOptions>
                    </SubMenuContainer>
                  )}
                </div>
              ))}
            </div>
            <SideNavBottomContainer>
              <Link to="/login">
                <SideNavOptionBottom>
                  <SideNavText>Login</SideNavText>
                </SideNavOptionBottom>
              </Link>
              <SideNavOptionBottom
                className="active-button"
                onClick={() => updateShowJoinModal(true)}
              >
                <SideNavText>Join Now</SideNavText>
              </SideNavOptionBottom>
            </SideNavBottomContainer>
          </Content>
        </SideNavbarContainer>
      </Wrapper>
    </>
  );
};
