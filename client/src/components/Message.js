import React from "react";
import { Chat_History } from "../data/index";
import  {Doc, Media, Reply, TextMsg, Timeline}  from "./MsgType";
const Message = () => {
  return (
    <div>
      {Chat_History.map((el) => {
        switch (el.type) {
          case "divider":
            return <Timeline el={el}/>;
          case "msg": 
            switch (el.subtype) {
              case "img":
                return <Media el={el}/>;
                
              case "reply":
              return <Reply el={el}/>
               
              case "doc":
               return <Doc el={el}/>
              case "link":
                break;
               
            default:
             return <TextMsg el={el}/>;  
          }
          break;
          default:
            <></>
        }
      })}
    </div>
  );
};

export default Message;
