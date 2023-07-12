import { SideNav } from "components/navigation/index";
import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components/macro";
import { Toaster } from "components/toaster";
import Courses from "./courses";
import HomePage from "./home";

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Pages = () => {
  return (
    <PageContainer>
      <SideNav />
      <Switch>
        <Route exact path="/hyperion-dev/">
          <Toaster />
          <HomePage />
        </Route>
        <Route path="/hyperion-dev/pricing">
          <div>Pricing</div>
        </Route>
        <Route path="/hyperion-dev/human-mentoring">
          <div>About us</div>
        </Route>
        <Route path="/hyperion-dev/corporate-services">
          <div>For employers</div>
        </Route>
        <Route path="/hyperion-dev/contact">
          <div>Contact us</div>
        </Route>
        <Route path="/hyperion-dev/courses">
          <Courses />
        </Route>
      </Switch>
    </PageContainer>
  );
};

export default Pages;
