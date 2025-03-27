import { useState } from "react";

export default function handleDelete(id) {

    fetch(`http://localhost:8080/titles/$`, {
        method


//     const url = 'your-api-endpoint/resource/id'; // Replace with your API endpoint and resource ID

// fetch(url, {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json' // Adjust if your API expects a different content type
//     // Add other headers if needed, e.g., 'Authorization': 'Bearer your_token'
//   },
//   // Some APIs allow a request body in DELETE requests, but it's not always recommended
//   // body: JSON.stringify({}), 
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return response.json(); // Or response.text() if the server returns plain text
// })
// .then(data => {
//   console.log('Success:', data); // Handle the response data
// })
// .catch(error => {
//   console.error('Error:', error); // Handle errors
// });