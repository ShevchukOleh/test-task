import React, { Suspense } from "react";
import { Header } from "./Layout.styled";
import { Outlet, useNavigate } from "react-router-dom";
import { useFeedContext } from "components/FeedContext/FeedContext";

const Layout = () => {
  const { selectedFeedTitle } = useFeedContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLogin', 'false');
    navigate("/login");
  };

  return (
    <>
      <Header>
        <h1>{selectedFeedTitle}</h1>
        <button type="submit" onClick={handleLogout}>Logout</button>
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
