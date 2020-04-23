import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;

/* If all of your credentials are right then we will get a token in response 
and we can see that token inside Postman or even in our console.
After getting a token, we need to store that token inside localStorage 
and set the header to add that token in the future request. 
So when we try to access any protected route then due to jwt token, 
we can access that route very easily.
Here we perform that action: we have set the headers and add the Authorization to a token. 
Now, we need to save this token and set the current user as a logged in user.
That is performed in authActions.js
*/
