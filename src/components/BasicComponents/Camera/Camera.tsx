// import React from 'react';
// import './Camera.scss';
// import CameraIcon from '../../../assets/icons/camera.svg';
// import CameraPreview from '../../../assets/icons/camera_preview.svg';
// import { TypoGraphy } from '../';
// import { Link } from 'react-router-dom';
// import { useCandidateImage } from '../../../contexts';

// export const Camera = () => {
//   const { candidateImage, image } = useCandidateImage();

//   return (
//     <div className="d-flex justify-content-center align-items-center">
//       <img
//         src={image}
//         alt="preview"
//         className={`w-40 preview ${candidateImage ? 'd-flex' : 'd-none'}`}
//       />
//       {/* <canvas
//         ref={image}
//         className={`position-fixed w-40 preview ${
//           candidateImage ? 'd-flex' : 'd-none'
//         }`}
//       ></canvas> */}
//       <div
//         className={`${
//           candidateImage ? 'd-none' : 'd-flex'
//         } camera-input w-40 lh-lg  d-flex flex-column justify-content-center align-items-center`}
//       >
//         <Link to="/clickpicture">
//           <img
//             src={CameraIcon}
//             alt="camera"
//             className="camera-img d-flex"
//             width="36"
//             height="33"
//           />
//         </Link>
//         <TypoGraphy variant="body1" classname="txt-fade fw-600 pt-4 font-12px">
//           Click Picture
//         </TypoGraphy>
//         <TypoGraphy variant="" classname="txt-fade  fw-600">
//           <span>(optional)</span>
//         </TypoGraphy>
//       </div>
//     </div>
//   );
// };

import { useState, useRef } from 'react';
import CameraIcon from '../../../assets/icons/camera.svg';
import './Camera.scss';
import { TypoGraphy } from '../';

export const Camera = ({ onChange, value }: any) => {
  const [isImagePreview, setImagePreview] = useState<boolean>(false);
  const imgRef: any = useRef(null);

  const setImgPreview = (e: any) => {
    imgRef.current.src = window.URL.createObjectURL(e.target.files[0]);
    setImagePreview(true);
  };

  return (
    <div className="camera d-flex justify-content-center align-items-center">
      <div>
        <img
          ref={imgRef}
          alt="user-img-preview"
          className={`preview rounded-3 ${
            isImagePreview ? 'd-flex' : 'd-none'
          }`}
        />
      </div>
      <div
        className={`camera-input w-40 ${
          isImagePreview ? 'd-none' : 'd-flex'
        } flex-column justify-content-center align-items-center`}
      >
        <label
          htmlFor="cameraFileInput"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <img src={CameraIcon} alt="camera" />
          <input
            className="d-none"
            id="cameraFileInput"
            type="file"
            accept="images/*"
            capture="environment"
            onChange={(e: any) => {
              setImgPreview(e);
            }}
          />
          <TypoGraphy
            variant="body1"
            classname="txt-fade fw-600 pt-4 font-12px"
          >
            Click Picture
          </TypoGraphy>
          <TypoGraphy variant="" classname="txt-fade  fw-600">
            <span>(optional)</span>
          </TypoGraphy>
        </label>
      </div>
    </div>
  );
};
