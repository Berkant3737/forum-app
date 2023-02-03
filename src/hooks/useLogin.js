import { useState } from "react";
import UserServices from "../services/user-services"

function useLogin() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const setDataPartialy = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
}
const handleSubmit= (event) =>{
    console.log("E-mail Adresiniz: "+ data.email);
    console.log("Şifreniz: " + data.password);

    UserServices.login(data.email, data.password);
    event.preventDefault();
}

return [data, setDataPartialy, handleSubmit]
}

export default useLogin