import React, { useState, useCallback, useEffect, useContext } from 'react';
import ReactCrop from 'react-image-crop';
import testimage from "../testpost.jpg";
import Cropper from 'react-easy-crop';
import "./popupStyle.scss";
// import imageToBase64 from 'image-to-base64';
import FileBase64 from 'react-file-base64';
import getCroppedImg from './cropImage'
// imageToBase64 = require('image-to-base64');
import imageToBase64 from 'image-to-base64';
import { BiCrop } from 'react-icons/bi';
import { BsPlusSquareFill } from 'react-icons/bs'
import { useMutation, gql } from "@apollo/client";
import { dimContext } from '../../../Contexts/dimContext';
    // As Base64 string
    // return canvas.toDataURL('image/jpeg');
  
    // As a blob

    const SINGLE_UPLOAD = gql`
    mutation($file: Upload!) {
      uploadFile(file: $file) {
        filename
        mimetype
        uri
      }
    }
  `;


export default function SelectPost(props: any) {
    const toDim = useContext(dimContext);
    
    const [file,setFile] = useState(undefined);
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [croppedImage, setCroppedImage] = useState('undef')
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [showBox, setShowBox] = useState(false);
    const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD);
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
    toDim['setDim'](true);
    if (file === undefined) {
      let filebase = e.target.files[0];
      getBase64(filebase).then(
        (data: any) => {
        
          // console.log(data);
          setShowBox(true);
          setFile(data);
        }
      );
    } else {
      setCroppedImage('undef');
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
  let base64toFile = async (dataurl,filename) => {
    var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), 
    n = bstr.length, 
    u8arr = new Uint8Array(n);
    
while(n--){
    u8arr[n] = bstr.charCodeAt(n);
}

return new File([u8arr], filename, {type:mime});
  }
  let uploadFile = async () => {
    // let myFile = base64toFile(croppedImage, "image.jpg");
    // const croppedImage = await getCroppedImg(
    //   file,
    //   croppedAreaPixels,
    //   0
    // )
    let myFile = base64toFile(croppedImage, "image.jpg");
    myFile.then(async upload => {
      // console.log(upload);
      let status = await mutate({ variables: { file: upload } });
      let res = status.data.uploadFile;
      if (res.uri !== undefined) {
        console.log(res.uri);
        toDim['setDim'](false);
        setFile(undefined);
      
      }
    })
    // let upload = new File([blob], "image.jpg", { type: 'image/jpg' });
    // console.log(upload);
      
    
  
  }
 
  
  
  if (file === undefined) {
    
      return (
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          
          <input ref={ref} type="file" onChange={handleFile} id="file" style={{ display: 'none',alignContent:'center' }} accept="image/jpeg" />
         <span className="link" onClick={clickButton}> <BsPlusSquareFill />  <button className="btn btn-link link" >Add Post</button></span>
          
          
          </div>)
  }
  
  
  
  
  else
    return (
      <div >
        <div className="box" style={croppedImage === undefined ? { display: 'none' } : { display: '' }}>
          <div className="buttons">
            <img height="600px" width="600px" src={croppedImage} style={croppedImage === 'undef' ? { display: 'none' } : {}} ></img>
          <button className="btn btn-link link" onClick={handleFile} >Edit Crop</button>
          <input placeholder="Enter Caption"></input>
            <button className="btn btn-link link" style={{ float: 'right' }} onClick={uploadFile} >Post</button>
            </div>
       </div>

      <div className="crop" style={showBox ? { display: ''}:{display:'none'}}>
            {/* <input type="file" required onChange={onChange} /> */}
            <div style={{
   
          margin: " auto",
          position: "absolute",
          top: 0, left: 0, bottom: 0, right: 0,
          height:"600px",
          width: "600px",

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
          <button id="cropButton" className="btn btn-link link" onClick={showCroppedImage} >< BiCrop style={{fontSize:"25px"}} /></button>
        </div>
        </div>
        
        </div>
    )
}


