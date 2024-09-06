import { version } from "../package.json";

export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? "http://localhost:8080/" : "https://mysite.ru",

};

export const app = {
    title: "Шаблон проекта Vue.js",
    description: "Сделаем 1 раз, потом будет работать проще...",
    version: version,
};

export const links = [
    {
        title: "Главная",
        alias: "home",
        url: "/",
    },
    {
        title: "О шаблоне",
        alias: "about",
        url: "/about",
    },
];