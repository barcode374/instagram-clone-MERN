import React, { useState, useCallback, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import testimage from "../testpost.jpg";
import Cropper from 'react-easy-crop';
import "./popupStyle.scss";
// import imageToBase64 from 'image-to-base64';
import FileBase64 from 'react-file-base64';
import getCroppedImg from './cropImage'
// imageToBase64 = require('image-to-base64');
import imageToBase64 from 'image-to-base64';
  
    // As Base64 string
    // return canvas.toDataURL('image/jpeg');
  
    // As a blob




export default function SelectPost(props:any) {
    const [file,setFile] = useState(undefined);
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [croppedImage, setCroppedImage] = useState(undefined)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [showBox,setShowBox] = useState(false);
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
      }, [])
      
 
    function getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
  const handleFile = e => {
    
    if (file === undefined) {
      let filebase = e.target.files[0];
      getBase64(filebase).then(
        (data: any) => {
        
          console.log(data);
          setShowBox(true);
          setFile(data);
        }
      );
    } else {
      setCroppedImage(undefined);
      setShowBox(true);
    }
   
    
  }
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixels,
        0
      )
      
      setCroppedImage(croppedImage)
      setShowBox(false);
      // setFile(undefined);
    } catch (e) {
      console.error(e)
      setShowBox(false);
    }
  }, [croppedAreaPixels, 0]);
  let ref:any = React.createRef();
 let clickButton = () => {
   ref.current?.click();
  }
  // useEffect(() => {
  //   clickButton();
  // })
  
  
  
  
  
  if (file === undefined) {
    
      return (
        
          <div>
          <input ref={ref} type="file" onChange={handleFile} id="file" style={{ display: 'none' }} accept="image/jpeg" />
          <button className="btn btn-link link" onClick={clickButton} >New Post</button>
          
          
          </div>)
    } else
    return (
      <div>
      <div className="box" style={croppedImage === undefined ? { display:'none'}:{display:''}}>
            <img height="600px" width="600px" src={croppedImage} style={croppedImage === undefined ? { display: 'none' } : {}} ></img>
            <button className="btn btn-link " onClick={handleFile} >Edit Crop</button>
            </div>

      <div className="crop" style={showBox ? { display: ''}:{display:'none'}}>
            {/* <input type="file" required onChange={onChange} /> */}
            <div style={{
   
  //   margin: " auto",
  // position: "absolute",
  // top: 0, left: 0, bottom: 0, right: 0,
  // height:"600px",
  //         width: "600px",

  //         backgroundColor: "rgba(0,0,0,0.2)"
    

    
  }} onDoubleClick={showCroppedImage}>
            <Cropper
          image={file}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          disableAutomaticStylesInjection={false}
          
          style={{cropAreaStyle:{overflow:"hidden",height:"600px"},containerStyle:{overflow:'hidden'}}}
          
        />
          </div>
          <div className="buttonContainer">
          <button id="cropButton" className="btn btn-link link" onClick={showCroppedImage} >Crop</button>
        </div>
        </div>

        </div>
    )
}


