import axios from "axios";

const api_uri = "http://localhost:3001";

export const registerUser = async (data) => {
    const response = await axios.get(`${api_uri}/users`, {
        params: {
            email: data.email,
        }
    });
    const user = response.data[0];
    if(user)
    {
        return false;
    }
    const userdata = {...data,wishlist:[],cart:[]}
    await axios.post(`${api_uri}/users`, userdata);
    return true;
}

export const LoginUser = async (data) => {

    let response = await axios.get(`${api_uri}/users`, {
        params: {
            email: data.email
        }
    });
    if(!response.data[0])
    {
        alert("No account found with this email");
        return null;
    }
    
    response = await axios.get(`${api_uri}/users`, {
        params: {
            email: data.email,
            password: data.password
        }
    });
    if(!response.data[0])
    {
        alert("Incorrect password");
        return null;
    }

    return response.data[0].id;
}

export const forgetUser = async (data) => {
    let response = await axios.get(`${api_uri}/users`, {
        params: {
            email: data.email
        }
    });

    if(!response.data[0])
    {
        return false;
    }


    let id = response.data[0].id;
    response.data[0].password = data.newPass;
    
    await axios.put(`${api_uri}/users/${id}`,response.data[0])

    return true;
}