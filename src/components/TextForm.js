import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase!","success");
    };

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase!","success")

    };

    const handleClear = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("clear text!","success")

    };

    const handleCpClick = () => {
        let newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newtext);
        props.showAlert("converted to cpitalize!","success")

    };

    // const handleCopy = () => {
    //     var text = document.getElementById('myBox');
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert("copied clipboard!","success")


    // };
    const handleCopy = () => {
        var text = document.getElementById('myBox');
      
        if (navigator.clipboard) {
          text.select();
          navigator.clipboard.writeText(text.value)
            .then(() => {
              props.showAlert("Copied to clipboard!", "success");
            })
            .catch((error) => {
              console.error('Failed to copy: ', error);
              props.showAlert("Failed to copy to clipboard!", "error");
            });
        } else {
          // Fallback for browsers that do not support navigator.clipboard
          try {
            text.select();
            document.execCommand('copy');
            props.showAlert("Copied to clipboard! (Fallback)", "success");
          } catch (error) {
            console.error('Fallback: Unable to copy: ', error);
            props.showAlert("Unable to copy to clipboard! (Fallback)", "error");
          }
        }
      };
      

    const handleExtraSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("remove extra white spaces!","success")

    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <h1 style={{ color: 'navy',textDecoration:'underline', fontWeight:'200px',fontSize:'60px' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className={`form-control  bg-${props.mode === 'light'?'light':'warning'}`}
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        // style={{ background: props.mode === 'light' ? 'dark' : 'light' }}
                        rows="8"
                        placeholder='Enter text here'
                    ></textarea>
                </div>
                <button className='btn btn-success mx-1 btn-sm' onClick={handleUpClick}>UPPER-CASE</button>
                <button className='btn btn-success mx-1 btn-sm' onClick={handleLoClick}>LOWER-CASE</button>
                <button className='btn btn-success mx-1 btn-sm' onClick={handleCpClick}>CAPITALIZE-CASE</button>
                <button className='btn btn-success mx-1 btn-sm' onClick={handleClear}>Clear All</button>
                <button className='btn btn-success mx-1 btn-sm' onClick={handleCopy}>Copy</button>
                <button className='btn btn-success mx-1 btn-sm' onClick={handleExtraSpace}>Remove-Space</button>
            </div>
            <div className="container my-3">
                <h3 className='bg-warning text-center pb-1'> Text Summary</h3>
                <p className='text-warning'>{text.split(/\s+/).filter((element) => element !== '').length} words and {text.length} characters</p>
                <h5  className='text-warning'>{0.008 * text.split(/\s+/).filter((element) => element !== '').length} minutes for reading</h5>
                <h2 style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', paddingBottom: '6px' }}>Preview</h2>
                <h6 style={{ backgroundColor: 'none', color: 'navy', textAlign: 'justify' }}>{text}</h6>
            </div>
        </>
    );
}









































// import React, { useState } from 'react';

// export default function TextForm(props) {
//     const handleUpClick=()=>{
//         // console.log('cliked')
//         let newtext=text.toUpperCase();
//         setText(newtext)
//     }
//     const handleLoClick=()=>{
//         // console.log('cliked')
//         let newtext=text.toLowerCase();
//         setText(newtext)
//     }
//     const hanndleClear=()=>{
//         // console.log('cliked')
//         let newtext='';
//         setText(newtext)
//     }

//     const handleCpClick=()=>{
//         // console.log('cliked')
//         let newtext=text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
//         setText(newtext)
//     }
//     const hanndleCopy=()=>{
//         var text=document.getElementById('myBox');
//         text.select();
//         navigator.clipboard.writeText(text.value);
//     }
//     const handleextraspace=()=>{
//         var newText=text.split(/[ ]+/);
//         setText(newText.join(' '))
//     }
//     const handleOnChange=(event)=>{
//         // console.log('onchanged');
//         setText(event.target.value);

//     }
//     const [text, setText] = useState('');
//     // setText("write text here")
//     return (
//         <>
//         <div className='container'>
//             <h1 style={{color:'navy'}}>{props.heading}</h1>
//             <div className="mb-3">
//                 <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{background:(props.mode==='light'?'dark':'light')}} rows="8" placeholder='enter here'></textarea>
                
//             </div>
//             <button className='btn btn-success mx-1' onClick={handleUpClick}>UPPER-CASE</button>
//             <button className='btn btn-success mx-1' onClick={handleLoClick}>LOWER-CASE</button>
//             <button className='btn btn-success mx-1' onClick={handleCpClick}>CAPITALIZE-CASE</button>
//             <button className='btn btn-success mx-1' onClick={hanndleClear}>Clear All</button>
//             <button className='btn btn-success mx-1' onClick={hanndleCopy}>copy</button>
//             <button className='btn btn-success mx-1' onClick={handleextraspace}>Remove-Space</button>
//         </div>
//         <div className="container my-3">
//             <h3 className='bg-warning text-center pb-1'>Your text summary
//             <p>character and words in your paragraph </p>
//             </h3>
//             <h4>{text.split(" ").length} words And {text.length} character</h4>
//             <h5>{0.008*text.split(" ").length} minutes for reading</h5>
//             <h2 style={{backgroundColor:'navy',color:'white', textAlign:'center',paddingBottom:'6px'}}>Preview</h2>
//             <h6 style={{backgroundColor:'none',color:'navy',textAlign:'justify'}}>{text}</h6>

//         </div>
//         </>
//     )
// }