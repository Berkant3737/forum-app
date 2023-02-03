import { useState } from "react";
import UserServices from "../services/user-services"

const useRegister = () => {
    const [data, setData] = useState({
        name: '',
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
        console.log("Adınız: "+ data.name);
        console.log("Şifreniz: " + data.password);

        UserServices.register(data.name, data.email, data.password);
        event.preventDefault();
    }

    return [data, setDataPartialy, handleSubmit]
}

export default useRegister;