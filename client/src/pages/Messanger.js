import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import Conversation from "../components/conversation/Conversation";
import Messages from "../components/messages/Messages";
import Profile from "../components/profile/Profile";
import { AuthContext } from "../context/AuthContext";
import s from "../Global.module.css";
// import { getOthersProfile } from "../redux/ProfileSlice";

const Messanger = ({ history }) => {
  const { user } = useContext(AuthContext);
  const [conversation, setConversation] = useState([]);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("User = ", user);
  //   dispatch(getOthersProfile(user._id));
  // }, [history]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3300/api/v1/conversations/${user._id}`
        );
        console.log("Conversation = ", data);
        setConversation(data);
      } catch (error) {
        console.log("conversation error: ", error);
      }
    };
    getConversation();
  }, [user._id]);

  return (
    <div className={`${s.container} ${s.messanger}`}>
      <Conversation conversation={conversation} />
      <Messages />
      <Profile />
    </div>
  );
};

export default Messanger;
