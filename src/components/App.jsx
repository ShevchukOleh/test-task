import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { FeedDetails } from 'pages/FeedDetails/FeedDetails';
import { FeedProvider } from './FeedContext/FeedContext';
import LoginPage from 'pages/Login/Login';
import { PrivateRoute, PublicRoute } from './Routes/Routes';
import Home from 'pages/Home/Home';

function App() {
  return (
    <FeedProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute component={Layout} redirectTo="/login"/>}>
          <Route path="/feeds" element={<PrivateRoute component={Home} redirectTo="/login" />}/>
          <Route path="FeedDetails/:index" element={<PrivateRoute component={FeedDetails} redirectTo="/login" />}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/login" element={<PublicRoute component={LoginPage} redirectTo="/feeds" />} />
      </Routes>
    </FeedProvider>
  );
}

export default App;
