import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getChat() {
      console.log("starting get!");
      const chatsCol = collection(db, "Chats");
      const chatsDoc = await getDocs(chatsCol);
      const chatData = chatsDoc.docs.map((doc) => doc.data());
      console.log("here chatData", chatData);
      setMessages(chatData[0].messages);
    }

    getChat();
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
