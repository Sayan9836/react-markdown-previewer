import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css'
import { content } from './data';
import  markedCodePreview  from 'marked-code-preview';


const App = () => {


  const [text, setText] = useState(content);

  const [rows, setRows] = useState(12);
  const [noEditor, setNoEditor] = useState(false)

  const handleChange = (e) => {
    console.log('i am changed')
    setText(e.target.value);
  };

  const getMarkdownText = () => {

    const rawMarkup = marked(text, { sanitize: true,breaks: true,gfm: true, markedCodePreview});

    return { __html: rawMarkup };
  };

  const handleRows = () => {
    // e.preventDefault();
    setTimeout(() => {
      rows === 12 ? setRows(50) : setRows(12);
    }, 1000);
  }

  
  return (
    <div className="App">
      {
        !noEditor && (

          <div className='editor_wrapper'>
            <div className='header'>
              <div className='left_header'>
                <i class="fa-brands fa-free-code-camp"></i>
                <span>Editor</span>
              </div>
              <i class="fa fa-arrows-alt" onClick={handleRows} ></i>
            </div>
            <textarea rows={rows} id="editor" value={text}  onChange={handleChange}></textarea>
          </div>

        )
      }
      <div className='preview_wrapper'>
        <div className='header'>
          <div className='left_header'>
            <i class="fa-brands fa-free-code-camp"></i>
            <span>Previewer</span>
          </div>
          <i class="fa fa-arrows-alt" onClick={() => setNoEditor(!noEditor)} ></i>
        </div>
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </div>
    </div>
  );
};

export default App


