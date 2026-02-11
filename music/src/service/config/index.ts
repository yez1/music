import axios from 'axios';
//本地开发环境
// export const BASE_URL = "http://localhost:3000";
// export const BASE_URL = "https://giant-zoos-itch.loca.lt";
// 在你创建 axios 实例或配置拦截器的地方添加 headers
    export const service = axios.create({
        baseURL: 'https://giant-zoos-itch.loca.lt', // 确保这是你最新的穿透地址
        timeout: 5000,
        headers: {
        // 关键：这行代码会告诉 LocalTunnel 跳过验证页
        'Bypass-Tunnel-Reminder': 'true' 
        }
    });

export const TIME_OUT = 10000;

// console.log(process.env.NODE_ENV)

// console.log(process.env.REACT_APP_BASE_URL)