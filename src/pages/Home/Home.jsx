import { Feeds } from "pages/Feeds/Feeds";
import React, { useEffect, useState } from "react";
import { Form, Input, Label, SideBar, Title } from "./Home.styled";
import { useFeedContext } from "components/FeedContext/FeedContext";
import { AddNewChannel } from "components/Modal/AddNewChannel";
import { getPostsByUserId, createPost } from "API/API"; // Додавання createPost

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdPost, setCreatedPost] = useState(null);
  const [selectedFeed, setSelectedFeed] = useState("https://www.reddit.com/.rss");
  const [feeds, setFeeds] = useState([]);
  const { setFeedTitle } = useFeedContext();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRadioChange = (event) => {
    const feedUrl = event.target.value;
    setSelectedFeed(feedUrl);
    setFeedTitle(event.target.name);
  };

  useEffect(() => {
    const storedPost = localStorage.getItem("createdPost");
    if (storedPost) {
      setCreatedPost(JSON.parse(storedPost));
    }
  }, []); 

  useEffect(() => {
    const updateFeedList = async () => {
      const userId = 3;
      try {
        const userPosts = await getPostsByUserId(userId);
        if (createdPost) {
          setFeeds([...feeds, createdPost]); // Concatenate the arrays
        } else {
          setFeeds(userPosts);
        }
      } catch (error) {
        console.error('Error updating feed list:', error);
      }
    };
    updateFeedList();
  }, [createdPost]);
  

  const handleAddFeed = async (postData) => {
    try {
      const response = await createPost(postData);
      console.log(response); // Виведіть відповідь для перевірки
      setCreatedPost(response);
      closeModal();
    } catch (error) {
      console.error("Error creating feed:", error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
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
          {feeds.map((feed) => (
            <Label key={feed.id}>
              <Input
                type="radio"
                name={feed.title}
                value={feed.body}
                checked={selectedFeed === feed.body}
                onChange={handleRadioChange}
              />
              {feed.title}
            </Label>
          ))}
        </Form>
      </SideBar>
      <button onClick={openModal}>Add New Feed</button>
      <Feeds feeds={feeds} selectedFeed={selectedFeed} />
      {isModalOpen && (
      <AddNewChannel closeModal={closeModal} setCreatedPost={setCreatedPost} createdPost={createdPost} />
      )}
    </div>
  );
};

export default Home;
