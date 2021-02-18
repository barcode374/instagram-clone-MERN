import React, { useState, useCallback } from 'react';
import ReactCrop from 'react-image-crop';
import testimage from "../testpost.jpg";
import Cropper from 'react-easy-crop';

// import imageToBase64 from 'image-to-base64';
import FileBase64 from 'react-file-base64';
import getCroppedImg from './cropImage'
  
    // As Base64 string
    // return canvas.toDataURL('image/jpeg');
  
    // As a blob




export default function SelectPost() {
    const [file,setFile] = useState();
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [croppedImage, setCroppedImage] = useState(undefined)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [showBox,setShowBox] = useState(false);
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
      }, [])
      
    const onChange = (e) =>{
        // setFile(e.target.files[0]);
        setShowBox(true);
        console.log(e.base64);
        setFile(e.base64);
    //    imageToBase64(e.target.files[0]).then(h=>{
    //        console.log(h);
    //    })
    }
    const showCroppedImage = useCallback(async () => {
        try {
          const croppedImage = await getCroppedImg(
            file,
            croppedAreaPixels,
            0
          )
          console.log('donee', { croppedImage })
          setCroppedImage(croppedImage)
          setShowBox(false);
          setFile(undefined);
        } catch (e) {
          console.error(e)
          setShowBox(false);
        }
      }, [croppedAreaPixels, 0])
    if(file === undefined){
        return (
        
        <div>
          <FileBase64 required onDone={onChange} />
          <img height="600px" width="600px" src={croppedImage} ></img>
          </div>)
    } else
    return (
        <div style={showBox?{display:''}:{display:'none'}}>
            {/* <input type="file" required onChange={onChange} /> */}
            <div style={{
   
    margin: "auto",
  position: "absolute",
  top: 0, left: 0, bottom: 0, right: 0,
  height:"600px",
  width:"600px",
    
    

    
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
      
          style={{cropAreaStyle:{overflow:"hidden"},containerStyle:{backgroundColor:'black'}}}
          
        />
<button style={{position:"absolute",bottom:"0",left:"0",right:"0",margin:"auto"}} onClick={showCroppedImage} >Crop</button>
        </div>
<div>

        
        </div>
        </div>
    )
}
