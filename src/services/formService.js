import axios from "axios";

export async function guardar(data) {
    try {
        console.log(data);
        const formData = new FormData();
        
        formData.append('name', formData.name)
        formData.append('last', formData.last)
        formData.append('email', formData.email)
        

        const response = await axios({
            url: 'https://fakerapi.it/api/v1/persons',
            method: 'POST',
            data: formData
        })
        return response;
    } catch (e) {
        console.log(e);
    }
}