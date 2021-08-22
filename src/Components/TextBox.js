import { React, useState } from "react";
import Container from '@material-ui/core/Container';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import '../App.css'
const TextBox=()=>{
    const [text, setText] = useState("");
    const ConvertUp =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const Convertlow=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const ChangeFun =(event)=>{
        setText(event.target.value);
    }
    return (
      <Container>
        <h2>Type Your Text here for Analyzing</h2>
        <div className="box">
          <TextareaAutosize
            value={text}
            onChange={ChangeFun}
            className="textbox"
            aria-label="minimum height"
            minRows={15}
            placeholder="Enter your text here"
          />
        </div>
        <span className="btn">
          <Button
            variant="contained"
            color="primary"
            onClick={ConvertUp}
          >
            Convert to UpperCase
          </Button>
        </span>
        <span className="btn">
          <Button
            variant="contained"
            color="primary"
            onClick={Convertlow}
          >
            Convert to LowerCase
          </Button>
        </span>
      </Container>
    );
}
export default TextBox;