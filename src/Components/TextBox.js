import { React, useState } from "react";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
const TextBox = () => {
  const [text, setText] = useState("");
  const ConvertUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    toast.success("Your Text is converted into UpperCase", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const Convertlow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    toast.success("Your Text is converted into LowerCase", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const ChangeFun = (event) => {
    setText(event.target.value);
  };
  const HandleClear = () => {
    setText("");
    toast.success("Text is Cleared", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const HandleCopy = () => {
    let text1 = document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    toast.success("Your Text is Copied", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const HandleRemove = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    toast.success("Extra space is Removed", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const WordsCount = () => {
    if (text === "") {
      return 0;
    } else {
      return text.endsWith(" ") === true
        ? text.split(" ").length - 1
        : text.split(" ").length;
    }
  };
  return (
    <Container>
      <div>
        <h2>Type Your Text here for Analyzing</h2>
        <div className="box">
          <TextareaAutosize
            id="myBox"
            value={text}
            onChange={ChangeFun}
            className="textbox"
            aria-label="minimum height"
            minRows={15}
            placeholder="Enter your text here"
          />
        </div>
        <button className="btn1" onClick={ConvertUp}>
          Convert to UpperCase
          <ToastContainer />
        </button>
        <button className="btn1" onClick={Convertlow}>
          Convert to LowerCase
        </button>

        <button className="btn1" onClick={HandleClear}>
          Clear Text
        </button>

        <button className="btn1" onClick={HandleCopy}>
          Copy Text
        </button>

        <button className="btn1" onClick={HandleRemove}>
          Remove extra Space
        </button>

        <div>
          <h2>Your Text Summary</h2>
          <p>
            <b>{WordsCount()}</b> words and <b>{text.length}</b> characters
          </p>
          <p>{0.008 * WordsCount()} Minutes read</p>
          <h2>Privew</h2>
          {text.length > 0 ? text : "Enter something to perview here"}
        </div>
      </div>
    </Container>
  );
};
export default TextBox;
