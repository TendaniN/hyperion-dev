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
      <Toaster />
      <SideNav />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/pricing">
          <div></div>
        </Route>
        <Route path="/human-mentoring">
          <div></div>
        </Route>
        <Route path="/corporate-services">
          <div></div>
        </Route>
        <Route path="/contact">
          <div></div>
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
      </Switch>
    </PageContainer>
  );
};

export default Pages;
