'use client';

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
    // for creating a custome button
    const imageInput = useRef();
    
    // for creating custome button
    function handlePickClick() {
        imageInput.current.click();
    }

  return (
    <div className={classes.picker}>
      <label html={name}>{label}</label>
      <div className={classes.controls}>
        <input
        className={classes.input} // makes the original button invisable
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput} //for custome image
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
            Pick an Image
        </button>
      </div>
    </div>
  );
}
