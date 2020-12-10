import axios from 'axios';
import Constants from "expo-constants";

const { manifest } = Constants;

// VM url
const prod = {
    url: 'http://it2810-75.idi.ntnu.no:3000',
};

// Local url
const dev = {
    url: `http://${manifest.debuggerHost.split(":").shift()}:8000`
};



export const config = prod

export default axios.create({baseURL: config.url});
