// Add your code here
//1. SEND DATA
//=============
const userCredentials = {
  name: "Steve",
  email: "steve@steve.com",
};
const dataSubmission = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(userCredentials),
};

//2. HANDLE RESPONSE
//===================

function submitData() {
  return (
    fetch("http://localhost:3000/users", dataSubmission)
      .then((res) => res.json())
      .then((data) => {
        let input = document.querySelector("body");
        input.textContent = data.id;
      })
      //3. HANDLE ERRORS
      //=================
      .catch((error) => {
        let errorMessage = document.querySelector("body");
        errorMessage.textContent = error.message;
      })
  );
}
// submitData("Sam", "sam@sam.com");
