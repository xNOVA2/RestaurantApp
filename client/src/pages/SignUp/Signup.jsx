import React, { useState } from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom'
export const SignUp = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className="SignUP">
      <div className="SignUP-form">
        <div className="SignUpPicture">
          <input type="file" onChange={handleImageChange} />
          {image && <img src={image} alt="Selected Profile" />}
        </div>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to='/Signin'><input type="submit" value="Sign Up" className="submit"  /></Link> 
      </div>
    </div>
  );
};
