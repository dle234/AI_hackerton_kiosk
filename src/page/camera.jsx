import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import image from "./camara.module.css";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import P from "../component/P";
import { sendImageToAI } from "../api/api";
import { useQuery } from "@tanstack/react-query";

export const MainSt = styled.div`
  width: 311px;
  height: 667px;
  background-color: #ffffff;
  padding: 0 2rem 0 2rem;

  margin: auto;
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 310px;
  height: 45px;
  border: 0;
  border-radius: 0.5rem;
  background-color: rgba(68, 96, 239, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 17px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Btn = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Camera = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const [filterO, setfilter] = useState("");
  const video = document.getElementById("videoCam");
  const canvas = document.getElementById("canvas");
  const [CanvasState, setCanvasState] = useState("none"); //사
  const [CameraState, setCameraState] = useState(""); //사

  useEffect(() => {
    getWebcam((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  const getWebcam = (callback) => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };

  // function GoToCamera(target) {
  //   // 다시 촬영
  //   const context = canvas.getContext("2d");
  //   context.scale(-1, 1); // 좌우 반전
  //   context.translate(-1024, 0); // 좌우 반전
  //   context.drawImage(video, 0, 0, "1024", "768");
  //   setCanvasState("none");
  //   setCameraState("");
  //   getWebcam((stream) => {
  //     videoRef.current.srcObject = stream;
  //   });
  // }

  const sreenShot = (target) => {
    // 카메라 촬영
    // setCanvasState(""); // 켄버스 켜기
    setCameraState("none"); //비디오 끄기
    const video = document.getElementById("videoCam");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.scale(-1, 1); // 좌우 반전
    context.translate(-1024, 0); // 좌우 반전
    //context.drawImage(video, 0, 0, "1024", "768");

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    const scale = Math.min(310 / videoWidth, 600 / videoHeight);
    const scaledWidth = videoWidth * scale;
    const scaledHeight = videoHeight * scale;
    const offsetX = (310 - scaledWidth) / 2;
    const offsetY = (600 - scaledHeight) / 2;

    canvas.width = 310;
    canvas.height = 600;
    context.drawImage(
      video,
      0,
      0,
      videoWidth,
      videoHeight,
      offsetX,
      offsetY,
      scaledWidth,
      scaledHeight
    );
    canvas.toBlob((blob) => {
      //캔버스의 이미지를 파일 객체로 만드는 과정
      let file = new File([blob], "fileName.jpg", { type: "image/jpeg" });
      const uploadFile = [file]; //이미지 객체
      sendImageToAI(file);
      //ai 서버로!!!
    }, "image/jpeg");

    const image = canvas.toDataURL(); // 이미지 저장하는 코드
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🎨]";
    link.click();

    const s = videoRef.current.srcObject;
    s.getTracks().forEach((track) => {
      track.stop();
    });

    navigate(routes.loading);
  };

  return (
    <MainSt>
      <Div>
        <P margin="7rem 0 3rem 0rem">
          안녕하세요 <br />
          아래 버튼을 눌러주세요
        </P>
        <Img>
          <img
            style={{
              width: "180px",
            }}
            src={`${process.env.PUBLIC_URL}/image/우주선.jpg`}
          />
        </Img>
      </Div>

      <div
        style={{
          position: "absolute",
          zIndex: "100",
          // width: "1024px",
          backgroundColor: "white",
        }}
      >
        <video
          id="videoCam"
          ref={videoRef}
          autoPlay
          style={{
            display: " ",
            width: "0px",
            webkitTransform: "rotateY(180deg)",
          }}
        />

        <canvas
          id="canvas"
          width="311px"
          //폰 너비로 바꾸자~~~
          height="667px"
          style={{
            display: CanvasState,
            position: "absolute",
            left: "500px",
          }}
        ></canvas>
        {/* {CanvasState === "none" ? ( */}
        <Btn>
          <Button onClick={sreenShot}> 주문하기</Button>
        </Btn>

        {/* ) : (
        <div
          onClick={GoToCamera}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70px",
            height: "70px",
            margin: "10px",
            borderRadius: "10px",
            position: "absolute",
            zIndex: "101",
            bottom: "5%",
            left: "46%",
            cursor: "pointer",
            backgroundColor: "white",
          }}
        >
          <p>다시 촬영</p>
        </div>
      )} */}
      </div>
    </MainSt>
  );
};

export default Camera;
