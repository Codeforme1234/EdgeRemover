import React, { useState, useRef } from "react";

const MainPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const downloadRef = useRef(null); // Reference for download link

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(URL.createObjectURL(img));
      setSelectedFile(img);
    }
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://imagecrop-cu5m.onrender.com/", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Image upload failed");

      const blob = await response.blob();
      const imageObjectURL = URL.createObjectURL(blob);
      setSelectedImage(imageObjectURL);
      downloadRef.current.href = imageObjectURL; // Set download link
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRemoveBackground = async () => {
    if (selectedFile) {
      await handleFileUpload(selectedFile);
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <>
      <div className="bg-white w-screen h-screen p-8 rounded shadow-md text-center flex flex-col ">
        <h2 className="text-xl font-bold mb-6">
          IMAGE CROP USING CORNER POINTS
        </h2>
        <div className="mb-4">
          <label
            className="block mb-2 pt-4 text-sm font-medium text-gray-800 dark:text-gray-800"
            htmlFor="upload-image"
          >
            Upload Image
          </label>
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-grey-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:text-black hover:file:bg-pink-200"
          />
        </div>
        <div className="image-container flex justify-around items-center w-full mb-6">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Uploaded Preview"
              className="border rounded max-w-xs max-h-48"
            />
          )}
        </div>
        <div className="button-group justify-end">
          <button
            onClick={handleRemoveBackground}
            className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 mr-4"
          >
            Remove
          </button>
          <a
            ref={downloadRef}
            download="processed_image.jpg"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
          >
            Download
          </a>
        </div>
        <footer className="mt-auto py-3 text-center w-full">
          <p>Made with <span role="img" aria-label="love">❤️</span></p>
        </footer>
      </div>
    </>
  );
};

export default MainPage;
