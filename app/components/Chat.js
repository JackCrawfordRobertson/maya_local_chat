"use client";


import { useEffect, useRef, useState } from 'react';
import { collection, orderBy, query, limit, addDoc, serverTimestamp } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';

const Chat = () => {
  const messagesRef = collection(db, 'messages');
  const queryRef = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(queryRef, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
    });
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const ChatMessage = ({ message }) => {
  return (
    <div>
      <p>{message.text}</p>
    </div>
  );
};

export default Chat;