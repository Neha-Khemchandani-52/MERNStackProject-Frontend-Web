import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      //dispatch(addFeed(res?.data));

      dispatch(addFeed(res?.data?.data));
    } catch (err) {

      //TODO: handle error
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  // For Single Feed
  // return (
  //   feed && (
  //     <div className="flex justify-center my-10">
  //       <UserCard user={feed.data[0]} />
  //     </div>
  //   )
  // );

  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    feed && (
      <div className="flex flex-wrap justify-center gap-6 my-10">
        {feed.map((usr) => (
          <UserCard key={usr._id} user={usr} />
        ))}
      </div>
    )
  );
};

export default Feed;