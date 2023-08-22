import axios from "axios";
import routes from "../routes";

export const instance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 1000 * 5,
  headers: {
    "Content-Type": "application/json",
  },
});
// export const getProducts = async (data) => {
//   const { email, password } = data;
//   return await instance.get(`/get?minAge=${}&maxAge=${}`, {
//     email,
//     password,
//   });
// };

// export const sendImageToAI = async (imageFile) => {
//   const formData = new FormData();
//   formData.append("image", imageFile);

//   const response =
// };
// export const sendImageToAI = async (imageFile) => {
//   const formData = new FormData();
//   formData.append("image", imageFile);
//   await fetch(
//     "https://port-0-ai-drf-uei072flawmy4wv.gksl2.cloudtype.app/process-image/",
//     {
//       method: "POST",
//       body: formData,
//     }
//   );
// };

export const sendImageToAI = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(
    // ai 백엔드 배포링크
    "https://port-0-ai-drf-uei072flawmy4wv.gksl2.cloudtype.app/process-image/",
    {
      method: "POST",
      body: formData,
    }
  );
  if (response.ok) {
    const data = await response.json();
    console.log("AI Result:", data); // AI 모델에서 반환한 결과 출력
    //   const trimStr = data.split(" ").join("");
    let i = 0;
    // Object.keys(data).forEach(function (v) {
    //   localStorage.setItem(i, data[v]);
    //   i++;
    //   console.log(data[v]);
    // });

    localStorage.setItem("age", data.age);
    localStorage.setItem("gender", data.gender);
    localStorage.setItem("height", data.height);
    //   window.location.href = "/selectPack";
  } else {
    console.error("인식에 실패했어요");

    // localStorage.setItem(0, "30");
    // localStorage.setItem(1, "m");
    // window.location.href = "/error";
  }

  //  if (response.ok) {
  //       const data = await response.json();
  //       console.log("AI Result:", data); // AI 모델에서 반환한 결과 출력
  //       //   const trimStr = data.split(" ").join("");
  //       let i = 0;
  //       Object.keys(data).forEach(function (v) {
  //         localStorage.setItem(i, data[v]);
  //         i++;
  //         console.log(data[v]);
  //       });
  //       //   window.location.href = "/selectPack";
  //     } else {
  //       console.error("인식에 실패했어요");
  //       localStorage.setItem(0, "30");
  //       localStorage.setItem(1, "m");
  //       //   window.location.href = "/";
  //     }
  //   } catch (error) {
  //     console.error("Error sending image to AI:", error);

  //     // window.location.href = "/";
  //   }
};
