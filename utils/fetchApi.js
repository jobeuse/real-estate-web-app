import axios from "axios";
export const basUrl="https://bayut.p.rapidapi.com/"


export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '7211eeb065mshd03a24c4c654134p14166ajsne0a144204e1b',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        }
    });
    return data;
}