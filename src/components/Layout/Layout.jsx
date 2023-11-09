import React, { Suspense } from "react";
import { Header } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { useFeedContext } from "components/FeedContext/FeedContext";

const Layout = () => {
  const { selectedFeedTitle } = useFeedContext();

  return (
    <>
      <Header>
        <h1>{selectedFeedTitle}</h1>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
