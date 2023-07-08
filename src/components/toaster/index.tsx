import React, { useState } from "react";
import styled from "styled-components";
import { TbCircleX } from "react-icons/tb";

import { Toast, ToastBody } from "reactstrap";

const ToastButton = styled.button`
  border: none;
  transition: all 150ms ease-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    stroke: var(--white);
  }

  :hover {
    transform: scale(1.05);
  }
`;

const StyledToaster = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 99999999;

  @media (max-width: 60em) {
    top: 4rem;
  }
`;

const StyledToast = styled(Toast)`
  background: url(/src/assets/blue-swirls-banner-bg.png); // image quality is not great but would look better in Prod
  background-size: 220% 100%;
  min-width: 35rem !important;
  padding: 0 1rem 1rem 0 !important;
  border-radius: var(--radii-small);
  box-shadow: var(--shadow-elevated);
  justify-content: flex-end;

  .heading {
    font-family: var(--MontserratExtraBold);
    font-weight: 700;
    font-size: var(--medium);
    justify-content: flex-end;
    display: flex;
    text-align: center;
    width: 100%;
    color: var(--gold);
    padding-top: 1.5rem;
  }

  .info {
    font-family: var(--MontserratExtraBold);
    font-weight: 700;
    font-size: var(--medium);
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    justify-content: flex-end;
    display: flex;
    color: var(--white);
  }

  .button-row {
    justify-content: flex-end;
    display: flex;
    padding: 0;
  }

  button.register-button {
    border-radius: var(--radii-xsmall);
    box-shadow: var(--shadow-normal);
    font-family: var(--MontserratBold);
    font-size: var(--small);
    font-weight: 600;
    padding: 0.5rem 1rem;
    background-color: var(--dark-blue);
    border: none;
    color: var(--white);
  }

  @media (max-width: 60em) {
    width: calc(100% - 0.5rem) !important;
    min-width: 15rem !important;
    .heading,
    .info {
      font-size: var(--default);
    }

    .button-row {
      justify-content: center;
    }
  }
`;

export const Toaster = () => {
  const [showToaster, updateShowToaster] = useState(true);

  const handleClose = () => {
    /**
     * Should this badge show everytime someone enters the page?
     * Yes: Local state
     * Should the browser remember if the user closed the message before?
     * Yes: localStorage
     */
    // localStorage.setItem("dismiss-webinar-toast", "true");
    updateShowToaster(false);
  };

  // If you want it to be remembered by the browser
  // useEffect(() => {
  //   const displayToaster = localStorage.getItem("dismiss-webinar-toast");
  //   if(displayToaster === "true"){
  //     updateShowToaster(false);
  //   }
  // }, []);

  return (
    <div>
      <StyledToaster>
        <StyledToast isOpen={showToaster}>
          <ToastBody
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <ToastButton onClick={() => handleClose()} className="my-auto">
                <TbCircleX />
              </ToastButton>
            </div>
            <div
              className="p-0"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
              }}
            >
              <div className="heading">LEARN MORE ABOUT OUR BOOTCAMPS</div>
              <div className="info">Join our next info session webinar!</div>
              <div className="button-row">
                <button className="register-button">Register Now</button>
              </div>
            </div>
          </ToastBody>
        </StyledToast>
      </StyledToaster>
    </div>
  );
};
