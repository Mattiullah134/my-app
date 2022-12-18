import React, { useState } from 'react'

export default function About(props) {
  // const[btntext , setMyBtntext] = useState("Enable Dark Mode");
  // const [myStyle, setMyStyle] = useState(
  //   {
  //     color: 'black',
  //     backgroundColor: 'white'
  //   }
  // )
 let myStyle = {
  color : props.mode === 'dark' ? 'white' : 'black',
  backgroundColor : props.mode === 'dark' ? '#343a40' : 'white'
 }
  return (

    <div className='container' style={myStyle} >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze the text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils</strong> give you a way to analyze your text quickly and efficiently. Be it word count, character count, ability to speak the text and remove the extra spaces.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant character count and the word count statitics for a given text. Textutitls reports the number of word and characters. Thus it is suitable of writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any browsers such as Chrome, Firefox, Internet Explorer, Safari and Opera. It suits to count chracters in facebook, blog , book and exel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cotainer">

        <button onClick={toDark} type="button" className="btn btn-primary my-4">{btntext}</button>
      </div> */}

    </div>
  )
}
