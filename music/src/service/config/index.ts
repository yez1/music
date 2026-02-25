import axios from 'axios';
//本地开发环境
// export const BASE_URL = "http://localhost:3000";
// config.ts
export const BASE_URL = process.env.REACT_APP_API_URL || "https://charm-producer-dirt-sas.trycloudflare.com";


export const TIME_OUT = 10000;

// console.log(process.env.NODE_ENV)

// console.log(process.env.REACT_APP_BASE_URL)




