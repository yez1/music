// import axios from 'axios';
// //本地开发环境
// // export const BASE_URL = "http://localhost:3000";



// export const TIME_OUT = 10000;

// // console.log(process.env.NODE_ENV)

// // console.log(process.env.REACT_APP_BASE_URL)


import axios from 'axios';

// 1. 定义地址
export const BASE_URL = "https://slick-seals-float.loca.lt";
export const TIME_OUT = 10000;

// 2. 创建并导出 axios 实例
const service = axios.create({
    baseURL: BASE_URL, 
    timeout: TIME_OUT,
    headers: {
        'Bypass-Tunnel-Reminder': 'true' 
    }
});

// 必须导出这个 service，其他页面才能引用它
export default service;