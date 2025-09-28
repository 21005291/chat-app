import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/ContextProvider.jsx';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    await onSent(prompt);
    setRecentPrompt(prompt);
  };

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="menu"
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="new chat" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-entry"
              >
                <img src={assets.message_icon} alt="recent" />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        )}
      </div>

 
    </div>
  );
};

export default Sidebar;
