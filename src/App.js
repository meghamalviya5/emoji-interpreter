import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🥳": "partying face",
  "🎉": "Party Popper",
  "🎊": "Confetti Ball",
  "🎇": "Sparkler",
  "🌃": "Night with Stars"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("We don't have meaning of this emoji");
    }
  }

  function onClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input
        placeholder={"put an emoji here to know the meaning"}
        onChange={onChangeHandler}
      />
      <h2>{meaning}</h2>
      <h3>emoji we know</h3>
      <ul>
        {Object.keys(emojiDictionary).map((emoji) => {
          return (
            <li id="emoji" onClick={() => onClickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
