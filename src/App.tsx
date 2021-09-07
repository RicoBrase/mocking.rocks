import React, { FormEvent, useState } from 'react';
import './App.css';
import MockBtn from './MockBtn/MockBtn';

const possibleTexts = ["Go mock yourself!", "Mock me harder, daddy!", "Mock 'em all!"];
const chosenBtnText = generateNewBtnText();

function generateNewBtnText() {
  return possibleTexts[Math.floor(Math.random() * possibleTexts.length)];
}

function App() {

  const originalFooterText = "This app is OpenSource on Github!";
  const [footerText, setFooterText] = useState(originalFooterText);
  const [btnText, setBtnText] = useState(chosenBtnText)
  const [textToMock, setTextToMock] = useState("");
  const [mockedText, setMockedText] = useState("");
  const handleTextToMockChange = (e: FormEvent) => {
    const inputVal = (e.target as HTMLTextAreaElement).value;
    setTextToMock(inputVal);
    setMockedText(mockText(inputVal));
  };

  const mockText = (input: string) => {
    let previousCharLowercase = false;
    const modifiedChars: string[] = [];
    for(let c of input.split("")) {
      if(/(?!\d)[\wäÄöÖüÜßẞ]/.test(c)) {
        if(previousCharLowercase) {
          modifiedChars.push(c.toUpperCase());
        }else{
          modifiedChars.push(c.toLowerCase());
        }
        previousCharLowercase = !previousCharLowercase;
      }else{
        modifiedChars.push(c);
      }
    }
    return modifiedChars.join("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setBtnText("« COPIED »");
    setMockedText(text);
    setTimeout(() => setBtnText(generateNewBtnText()), 1000);
  };

  return (
    <div className="app-container">
      <div className="mocker">
        <textarea placeholder="Input the text to mock here..." onChange={handleTextToMockChange}></textarea>
        <div className="mock-btn-container">
          <MockBtn text={btnText} clickEventHandler={() => {copyToClipboard(mockText(textToMock))}}></MockBtn>
        </div>
        
      { mockedText.length > 0 && (
        <div className="mocked-text">
          <p>{mockedText}</p>
        </div>
      ) }

      </div>
      <footer>
        <a
          onMouseOver={() => setFooterText(mockText(originalFooterText))}
          onMouseLeave={() => setFooterText(originalFooterText)}
          href="https://github.com/RicoBrase/mocking.rocks"
        >
          <p>{footerText}</p>
          <p>https://github.com/RicoBrase/mocking.rocks</p>
        </a>
      </footer>
    </div>
  );
}

export default App;
