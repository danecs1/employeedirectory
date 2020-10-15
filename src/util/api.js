import axios from 'axios';

export default {
    randomPeopleGenerator: function () {
        try {
            return axios.get('https://randomuser.me/api/?results=50&na=gb')
        }
        catch (error) {
            console.log(`Err${error}`)
        }
    }
}