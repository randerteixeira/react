"use client"

import { useReducer, useState, useRef } from "react"
import { Camera } from "react-camera-pro"
import * as faceapi from "face-api.js";

const Page = () => {
  type CameraType = {
    takePhoto: () => string
    switchCamera: () => void
  }
  const errorMessages = {
    noCameraAccessible: 'Nenhuma câmera acessível.',
    permissionDenied: 'Permissão para usar a câmera foi negada.',
    switchCamera: 'Não foi possível mudar a câmera.',
    canvas: 'Canvas não suportado.',
  };

  const camera = useRef<CameraType>(null)
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState<string | null>(null);





  return (
    <div className="container w-full h-full m-auto">
      <div className="relative w-full h-screen border-2 border-black rounded-lg">
        <Camera
          ref={camera}
          facingMode='user'
          errorMessages={errorMessages}
        />

        <button
          className="absolute left-0 bottom-4 z-10 bg-blue-500 text-white p-2 rounded"
          onClick={() => {
            if (camera.current) {
              const photo = camera.current.takePhoto();
              setImage(photo);
            }
          }}
        >
          Tirar Foto
        </button>

        <button
          className="absolute left-0 bottom-12 z-10 bg-green-500 text-white p-2 rounded"
          //hidden={numberOfCameras <= 1}
          onClick={() => {
            if (camera.current) {
              camera.current.switchCamera();
            }
          }}
        >
          Trocar Câmera
        </button>
        {image && (
          <img src={image} alt="Foto capturada" className="absolute bottom-0 right-0  w-96 h-72 " />
        )}
      </div>


    </div>


  )




  

}
export default Page