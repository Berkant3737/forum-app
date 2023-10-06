const register = (Name, Surname, Username, email, password) => {
  return fetch("http://localhost:4000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name,
      Surname,
      Username,
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Kaydınız başarıyla yapıldı");
    })
    .catch((error) => {
      console.log(error);
    });
};
const login = async (email, password) => {
  return fetch("http://localhost:4000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response)
    .then((data) => {
      console.log(data);
      console.log("Kaydınız başarıyla yapıldı");
    })
    .catch((error) => {
      let hata = error;
      console.log(hata);
    });
};

const UserServices = {
  register,
  login,
};

export default UserServices;
