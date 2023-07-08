import { SideNav } from "components/navigation/index";
import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components/macro";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Pages = () => {
  return (
    <Switch>
      <Route path="/">
        <PageContainer>
          <SideNav />
        </PageContainer>
      </Route>
    </Switch>
  );
};

export default Pages;
