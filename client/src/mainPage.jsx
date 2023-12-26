import React, { useState } from "react";

const MainPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(URL.createObjectURL(img));
    }
  };

  const handleRemoveBackground = () => {
    // Placeholder for background removal logic
    alert("Background removal not implemented yet.");
  }; 
  return (
    <>
      <div className="bg-white w-screen h-screen p-8 rounded shadow-md text-center">
        <h2 className="text-xl font-bold mb-6">IMAGE BACKGROUND REMOVER</h2>
        <div>
          <label
            className="block mb-2 p-7 text-sm font-800 text-gray-800 dark:text-gray-800"
            htmlFor="upload-image"
          >
            Upload Image
          </label>
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-grey-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold  file:text-black
              hover:file:bg-pink-200
            "
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Result:
          </label>
          <div className="flex justify-center items-center w-full">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Uploaded Preview"
                className="border rounded max-w-xs max-h-48"
              />
            )}
          </div>
        </div>
        <button
          onClick={handleRemoveBackground}
          className="mt-6 w-1/7 bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600"
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default MainPage;
