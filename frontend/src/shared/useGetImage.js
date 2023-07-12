import { useEffect, useState } from "react";
import axios from "../APIS/axios.js";

function useGetImage(style, setImage) {
  const getImage = async (roomId) => {
    try {
      const accessToken = localStorage.getItem("token");
      const response = await axios.get(`board/${style}`, {
        responseType: "blob",

        headers: { cookies: accessToken },
      });
      console.log(response);
      // Create a FileReader to read the image data
      const reader = new FileReader();
      reader.onloadend = () => {
        // Get the Base64 string from the FileReader result
        const dataURL = reader.result;
        // Set the data URL to the state
        setImage(dataURL);
      };
      reader.readAsDataURL(response.data);
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  };

  useEffect(() => {
    getImage();
  }, []);
}

export default useGetImage;
