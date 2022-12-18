import React , {useState} from 'react';

export default function TextInput(props) {
    const handleUpClick = () =>{
        // console.log("convert to upper case is click" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.alert("convert to uppercase" , "success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.alert("speak the text" , "success")

      }
    const handleloClick = () =>{
        // console.log("convert to upper case is click" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.alert("convert to lowercase" , "success")

    }
    const handleClearText = () =>{
        // console.log("convert to upper case is click" + text)
        let newText = '';
        setText(newText)
        props.alert("Clear the text" , "success")

    }
    const stateChange = (event) =>{
        // console.log("on Change")
        setText(event.target.value)
    }
    const removeExtraSpaces = ()=>{
        console.log("hi im extra spaces")
        let newText = text.split(/[ ]+/)
        // console.log(newText);
        setText(newText.join(" "));
        props.alert("remove the extra spaces" , "success")

    }
    const [text , setText] = useState('')
    // setText("this is the new text")
    return (
        <>
        <div className='container' style = {{color : `${props.mode === 'light' ? 'black' : 'white'}`}}>
            <h1 className='mb-4' >{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label"></label> */}
                <textarea className="form-control" value={text} style ={{backgroundColor : `${props.mode === 'light' ? 'white' : '#343a40'}`, color : `${props.mode === 'light' ? 'black' : 'white'}` }} onChange = {stateChange} id="myBox" rows="10"></textarea>
            </div>
            <div className="container">

            <button disabled ={text.length ===0} className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upper Case</button>
            <button disabled ={text.length ===0} className="btn btn-primary mx-3 my-3" onClick={handleloClick}>Convert to lower Case</button>
            <button disabled ={text.length ===0} className="btn btn-primary my-3 " onClick={handleClearText}>Clear Text</button>
            <button disabled ={text.length ===0} type="submit" onClick={speak} className="btn btn-primary mx-3 my-3">Speak</button>
            <button disabled ={text.length ===0} type="submit" onClick={removeExtraSpaces} className="btn btn-primary my-3">Remove Extra spaces</button>
            </div>
        </div>
        <div className="container" style = {{color : `${props.mode === 'light' ? 'black' : 'white'}`}}>
            <h1 >Your text sumarry</h1>
            <p>{text.split(" ").filter((element)=>{return element != 0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element != 0}).length} minute required to read the article (slow(150 wpm))</p>
            <p>{0.0032 * text.split(" ").filter((element)=>{return element != 0}).length} minute required to read the article (Average(300 wpm))</p>


            <h3>Preview</h3>
            <p>{text.length >0 ?text : "Please enter the text to preview"}</p>
        </div>
        </>
    )
}
