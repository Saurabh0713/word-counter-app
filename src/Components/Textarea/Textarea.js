import React,{useState} from 'react'
import './Textarea.css'

export default function Textarea(props) {

  const [text,setText] = useState('Given text area...')

  console.log(props.bgMode)
  
  function handleUppercase(){
    // console.log("up")
    if(text.length<1){
      console.log(text.length)
      props.showAlert("no text found","warning")
    }else{
    setText(text.toUpperCase())
    // props.showAlert("converted to uppercase","success")
    }
  }
  function handleLowercase(){
    if(text.length<1){
      console.log(text.length)
      props.showAlert("no text found","warning")
    }else{
    setText(text.toLowerCase())
    // props.showAlert("converted to lowercase","success")
    }
  }
  function handleCapitalize(){
    if(text.length<1){
      console.log(text.length)
      props.showAlert("no text found","warning")
    }else{
    let newtxt = text.charAt(0).toUpperCase() + text.slice(1)
     newtxt = newtxt.split("")
    for(let i=0;i<newtxt.length;i++){
      if(newtxt[i]===" "){
       newtxt[i+1]= newtxt[i+1].toUpperCase()
      }
      // newtxt[i][0]=newtxt[i][0].toUpperCase()
      // setText(text.charAt(i+1).toUpperCase())
    }
    newtxt.join("")
    setText(newtxt.join(""))
    // props.showAlert("text capitalized","success")
  }
  }
  function handleTextareaOnChange(event){
    // console.log("onchange")
    setText(event.target.value)
  }
  const handleClear=()=>{
    if(text.length<1){
      console.log(text.length)
      props.showAlert("no text found","warning")
    }else{
    setText("")
    // props.showAlert("text cleared","success")
    }
  }
  const handleExtraSpaces=()=>{
    if(text.length<1){
      console.log(text.length)
      props.showAlert("no text found","warning")
    }else{
    let newtxt = text.split("")
    let i=0,spaceFound=true;
    while(spaceFound===true){
      if(newtxt[i]===" "&&newtxt[i+1]===" "){
       newtxt.splice(i+1,1)
       i=i-1;
      }
      if(i===newtxt.length-1){
        spaceFound=false;
      }
      i++;
    }
        newtxt.join("")
        setText(newtxt.join(""))
    }
  }
  const [textareaStyle,setTextAreaStyle] = useState({
    // border: '1px solid grey',
    // 'border-style': 'solid none',
  })
  return (
    <div className={`container my-2 bg-${props.bgMode} text-${props.txtMode} rounded`} style={textareaStyle} >
    <div className='container my-2'>
        <h1 className='my-2'>Enter text below</h1>
        <textarea className={`form-control fst-italic bg-${props.textareaBgColor} text-${props.txtMode}`} rows="7" value={text} onChange={handleTextareaOnChange}></textarea>
        <button className='btn btn-primary my-3 mx-2' onClick={handleUppercase}>CONVERT TO UPPERCASE</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleLowercase}>convert to lowercase</button>
        <button className='btn btn-warning my-3 mx-2' onClick={handleCapitalize}>Capitalize Text</button>
        <button className='btn btn-warning my-3 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-danger my-3 mx-2' onClick={handleClear}>Clear text</button>
    </div>
    <div className='pb-1 container'>
      <h2 className='my-2'>Your text summary</h2>
      <p>{text.split(/\s+/).filter(element=>{return element.length!==0}).length} words {text.length} characters</p>
      <p>{(0.05 * text.split(" ").filter(element=>{return element.length!==0}).length).toFixed(3)} minutes read time</p>
      <h3>Preview</h3>
      <p className='preview fst-italic'>{text}</p>
    </div>
    </div>
  )
}
