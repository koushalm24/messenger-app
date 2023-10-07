import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/Authcontext'
import { ChatContext } from '../context/ChatContext';

const Message = ({ message }) => {

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);


  

const timestampSeconds = Object.values(message.date)[0]
const timestampNanoseconds = Object.values(message.date)[1]

const timestamp = new Date(timestampSeconds * 1000 + timestampNanoseconds / 1000000);
let day = timestamp.getDate();
let month = timestamp.getMonth() + 1; // Months are 0-indexed, so add 1
let year = timestamp.getFullYear();
let hour = timestamp.getHours();
let minutes = timestamp.getMinutes();

let am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour === 0) {
    hour = 12;
    am_pm = "AM";
  }
  month = month < 10 ? "0" + month : month;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  day = day < 10 ? "0" + day : day;

const formattedDate = `${year}-${month}-${day} ${hour}:${minutes}:${am_pm}`;




  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && `owner`} `} >
      <div className="messageInfo">
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
      </div>
      <div className="messageContent">
      <span>{formattedDate}</span>
        <p className={`${!data.user?.displayName && `hidden`}`}>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>

    </div>
  )
}

export default Message
