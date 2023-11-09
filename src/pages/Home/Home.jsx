import { Feeds } from "pages/Feeds/Feeds";
import React,{ useState } from "react";
import { Form, Input, Label, SideBar, Title } from "./Home.styled";
import { useFeedContext } from "components/FeedContext/FeedContext";

const Home = () => { 
  const [selectedFeed, setSelectedFeed] = useState("https://www.reddit.com/.rss");
  const { setFeedTitle } = useFeedContext();

  const handleRadioChange = (event) => {
    const feedUrl = event.target.value;
    setSelectedFeed(feedUrl);
    setFeedTitle(event.target.name);
  };
  
  return (
    <div style={{display: 'flex'}}>
      <SideBar>
        <Title>News channels</Title>
        <Form>
          <Label>
            <Input
              type="radio"
              name="Reddit"
              value="https://www.reddit.com/.rss"
              checked={selectedFeed === "https://www.reddit.com/.rss"}
              onChange={handleRadioChange}
            />
            Reddit
          </Label>
          <Label>
            <Input
              type="radio"
              name="NASA"
              value="https://www.nasa.gov/news-release/feed/"
              checked={selectedFeed === "https://www.nasa.gov/news-release/feed/"}
              onChange={handleRadioChange}
            />
            NASA
          </Label>
          <Label>
            <Input
              type="radio"
              name="Mobile World Live"
              value="https://www.mobileworldlive.com/latest-stories/feed/"
              checked={selectedFeed === "https://www.mobileworldlive.com/latest-stories/feed/"}
              onChange={handleRadioChange}
            />
            Mobile World Live
          </Label>
        </Form>
      </SideBar>
      <Feeds selectedFeed={selectedFeed}/>
    </div>
  );
};

export default Home;