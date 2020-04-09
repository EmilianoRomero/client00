const signUp = (newUser) => {
  const originalPassword = newUser.password;

  console.log("user action about to send to backend", newUser);
  console.log(
    "user action about to send to backend strigified",
    JSON.stringify(newUser)
  );

  return (dispatch) => {
    return fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: newUser,
      mode: "no-cors",
    })
      .then((res) => {
        console.log("response from backend after saving a newUser:", res);
        return res.json();
      })
      .then((data) => {
        if (data.msg) console.log(data.msg);
        else {
          const user = { email: data.email, password: originalPassword };
          // dispatch(signUp(user))
        }
      })
      .catch((err) => console.error(err));
  };
};

module.exports = {
  signUp: signUp,
};
