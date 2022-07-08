// import cloudinary from "cloudinary-vue";
// import dotenv  from "dotenv ";

//  const  uploadFileToCloudinary = (file) => {
//     return new Promise(function (resolve, reject) {
//     //Ideally these to lines would be in a .env file
//     const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dpakfvvhu/image/upload';
   

//     let formData = new FormData();
//     formData.append('upload_preset', 'jyb3nww5stanest');
//     formData.append('folder', 'Stanest');
//     formData.append('file', file);

//     let request = new XMLHttpRequest();
//     request.open('POST', CLOUDINARY_URL, true);
//     request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

//     request.onreadystatechange = () => {
//         // File uploaded successfully
//         if (request.readyState === 4 && request.status === 200) {
//             let response = JSON.parse(request.responseText);
//             resolve(response);
//         }

//         // Not succesfull, let find our what happened
//         if (request.status !== 200) {
//             let response = JSON.parse(request.responseText);
//             let error = response.error.message;
//             alert('error, status code not 200 ' + error);
//             reject(error);
//         }

//     };

//     request.onerror = (err) => {
//         alert('error: ' + err);
//         reject(err);
//     };

//     request.send(formData);
// });
// }


// module.exports = uploadFileToCloudinary