import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text)
    let newText=text.toUpperCase();
    setText(newText)   
  }

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text)
    let newText=text.toLocaleLowerCase();
    setText(newText)   
  }

  const handleOnChange=(event)=>{
    console.log("On change")
       setText(event.target.value)
  }
  
  const [text,setText] = useState('')
  return (
<>   
<div className='container' style={{color: props.mode === 'dark' ? 'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', 
color: props.mode === 'dark' ? 'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
</div>
<div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
<h1>Your Text Summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h2>preview</h2>
<p>{text}</p>
</div>
</> 
  )
}
