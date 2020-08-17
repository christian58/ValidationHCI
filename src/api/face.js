// import * as faceapi from "face-api.js";

// // Load models and weights
// export async function loadModels() {
//   const MODEL_URL = process.env.PUBLIC_URL + "/models";
//   await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
//   await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
//   await faceapi.loadFaceRecognitionModel(MODEL_URL);
// }

// export async function getFullFaceDescription(blob, inputSize = 512) {
//   // tiny_face_detector options
//   let scoreThreshold = 0.5;
//   const OPTION = new faceapi.TinyFaceDetectorOptions({
//     inputSize,
//     scoreThreshold,
//   });
//   const useTinyModel = true;

//   // fetch image to api
//   let img = await faceapi.fetchImage(blob);

//   // detect all faces and generate full description from image
//   // including landmark and descriptor of each face
//   let fullDesc = await faceapi
//     .detectAllFaces(img, OPTION)
//     .withFaceLandmarks(useTinyModel)
//     .withFaceDescriptors();
//   return fullDesc;
// }

// const maxDescriptorDistance = 0.5;
// export async function createMatcher(faceProfile) {
//   // Create labeled descriptors of member from profile
//   let members = Object.keys(faceProfile);
//   let labeledDescriptors = members.map(
//     (member) =>
//       new faceapi.LabeledFaceDescriptors(
//         faceProfile[member].name,
//         faceProfile[member].descriptors.map(
//           (descriptor) => new Float32Array(descriptor)
//         )
//       )
//   );

//   // Create face matcher (maximum descriptor distance is 0.5)
//   let faceMatcher = new faceapi.FaceMatcher(
//     labeledDescriptors,
//     maxDescriptorDistance
//   );
//   return faceMatcher;
// }

// const maxDescriptorDistance = 0.5;
// export async function createMatcher(faceProfile) {

//   var descriptors = new Float32Array([
//     -0.09840996563434601,
//     0.09993884712457657,
//     0.0867496132850647,
//     -0.05886644497513771,
//     -0.13485731184482574,
//   ]);
//   console.log("AEAA");
//   console.log(descriptors);
//   //   console.log(faceProfile.descriptor);

//   let labeledDescriptors = new faceapi.LabeledFaceDescriptors(
//     "user1",
//     descriptors
//   );
//   console.log("IMPRIME");
//   console.log(labeledDescriptors);

//   // Create face matcher (maximum descriptor distance is 0.5)
//   let faceMatcher = new faceapi.FaceMatcher(
//     labeledDescriptors,
//     maxDescriptorDistance
//   );
//   return faceMatcher;
// }

// faceProfile[member].descriptors.map(
//               (descriptor) => new Float32Array(descriptor)
//             )

/********** */

import * as faceapi from "face-api.js";

// Load models and weights
export async function loadModels() {
  const MODEL_URL = process.env.PUBLIC_URL + "/models";
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
  await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
}

export async function getFullFaceDescription(blob, inputSize = 512) {
  // tiny_face_detector options
  let scoreThreshold = 0.5;
  const OPTION = new faceapi.TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold,
  });
  const useTinyModel = true;

  // fetch image to api
  let img = await faceapi.fetchImage(blob);

  // detect all faces and generate full description from image
  // including landmark and descriptor of each face
  let fullDesc = await faceapi
    .detectAllFaces(img, OPTION)
    .withFaceLandmarks(useTinyModel)
    .withFaceDescriptors();
  return fullDesc;
}

const maxDescriptorDistance = 0.5;
export async function createMatcher(faceProfile) {
  // Create labeled descriptors of member from profile
  let members = Object.keys(faceProfile);
  let labeledDescriptors = members.map(
    (member) =>
      new faceapi.LabeledFaceDescriptors(
        faceProfile[member].name,
        faceProfile[member].descriptors[0]
        // faceProfile[member].descriptors.map(
        //   (descriptor) => new Float32Array(descriptor)
        // )
      )
  );
  console.log("LABEL");
  console.log(labeledDescriptors);
  // Create face matcher (maximum descriptor distance is 0.5)
  let faceMatcher = new faceapi.FaceMatcher(
    labeledDescriptors,
    maxDescriptorDistance
  );
  return faceMatcher;
}

// const maxDescriptorDistance = 0.5;
// export async function createMatcher(faceProfile) {
//   // Create labeled descriptors of member from profile
//   let members = Object.keys(faceProfile);
//   let labeledDescriptors = members.map(
//     (member) =>
//       new faceapi.LabeledFaceDescriptors(
//         faceProfile[member].name,
//         faceProfile[member].descriptors.map(
//           (descriptor) => new Float32Array(descriptor)
//         )
//       )
//   );
//   console.log("LABEL");
//   console.log(labeledDescriptors);
//   // Create face matcher (maximum descriptor distance is 0.5)
//   let faceMatcher = new faceapi.FaceMatcher(
//     labeledDescriptors,
//     maxDescriptorDistance
//   );
//   return faceMatcher;
// }
