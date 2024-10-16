import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const countWords = (text) => {
    let words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "");
    return words.length;
  };

  const countParagraphs = (text) => {
    let paragraphs = text
      .trim()
      .split(/\n+/)
      .filter((para) => para !== "");
    return paragraphs.length;
  };

  return (
    <div
      className="container my-2"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="text-center">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#808080" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleRemoveSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClearText}>
          Reset
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <ul>
          <li>
            <p>
              The Above text has <b>{text.length}</b> characters and{" "}
              <b>{countWords(text)}</b> words in it.
            </p>
          </li>
          <li>
            <p>
              The Above text has <b>{countParagraphs(text)}</b> paragraphs in
              it.
            </p>
          </li>
        </ul>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
