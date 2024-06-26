import React, { useState, useRef } from 'react';
import { Button } from '@material-tailwind/react';

const CatalogImageInput = ({ label, name, onChange, errorMessage, setImage }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      onChange(event);
    }
  };

  const handleCancelClick = () => {
    setImagePreview(null);
    fileInputRef.current.value = null; // Clear the file input
    setImage(null)
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        ref={fileInputRef}
        className="hidden"
        id={name}
        type="file"
        name={name}
        accept=".jpeg,.png,.webp,.jpg"
        onChange={handleImageChange}
      />
      {imagePreview && (
        <div className="relative mt-4">
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            className="max-w-[150px] h-auto rounded-md shadow-md"
          />
          <button
            onClick={handleCancelClick} 
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 hover:bg-red-600 "
          >
            &times;
          </button>
        </div>
      )}
      <br />
      <Button variant="gradient" className="flex items-center gap-3" onClick={handleButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Upload Image
      </Button>
      
      {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export default CatalogImageInput;
