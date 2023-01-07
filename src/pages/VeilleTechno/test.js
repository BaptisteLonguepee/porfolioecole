import { Rss } from "react-rss";

const MyRssFeed = () => {
    return (
      <Rss
        url="https://www.example.com/rss"
        items={5}
      />
    );
  };
  
  export default MyRssFeed;