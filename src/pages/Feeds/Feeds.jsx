import axios from "axios";
import { FeedDetails } from "pages/FeedDetails/FeedDetails";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import XMLParser from 'react-xml-parser';
import { FeedTitle } from "./Feeds.styled";

export function Feeds({selectedFeed}) {
  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get(selectedFeed)
      .then(response => {
        const xml = new XMLParser().parseFromString(response.data);
        setList(xml.children);
      })
      .catch(error => {
        console.error("Axios error:", error);
      });
  }, [selectedFeed]);

  return (
    <div style={{padding: '5px 15px'}}>
      {list?.map((item, index) => {
        const title = item.getElementsByTagName('title')[0]?.value;
        const published = item.getElementsByTagName('published')[0]?.value;
        const formattedDate = published ? new Date(published).toLocaleString() : "";
        const contentElement = item.getElementsByTagName('description')[0] || item.getElementsByTagName('content')[0];
        const content = contentElement ? contentElement.value : '';

        return (
          <Link key={index} to={`/FeedDetails/${index}`} state={{ from: location, feedData: { title, content, formattedDate} }}>
              <FeedTitle>
                <p>{title}</p>
                <p>{formattedDate}</p>
              </FeedTitle>
          </Link>
        
        );
      })}
    </div>
  )
};
