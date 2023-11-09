import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, GoBack, Title } from "./FeedDetails.styled";
import he from 'he';

export function FeedDetails() {
  const location = useLocation();
  const { feedData } = location.state || {};

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <Container>
      <Link to={backLinkLocationRef.current}><GoBack>&larr; Go back</GoBack></Link>
      {feedData && (
        <>
          <Title>{feedData.title}</Title>
          <div dangerouslySetInnerHTML={{ __html: he.decode(feedData.content) }} />
          <p>Published: {feedData.formattedDate}</p>
        </>
      )}
    </Container>
  );
}