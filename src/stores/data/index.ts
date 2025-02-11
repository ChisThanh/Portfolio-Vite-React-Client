import android from "../svgs/android.svg";
import antdesign from "../svgs/antdesign.svg";
import apache from "../svgs/apache.svg";
import bootstrap from "../svgs/bootstrap.svg";
import csharp from "../svgs/csharp.svg";
import css3 from "../svgs/css3.svg";
import docker from "../svgs/docker.svg";
import fastapi from "../svgs/fastapi.svg";
import firebase from "../svgs/firebase.svg";
import git from "../svgs/git.svg";
import github from "../svgs/github.svg";
import gitlab from "../svgs/gitlab.svg";
import golang from "../svgs/golang.svg";
import html5 from "../svgs/html5.svg";
import java from "../svgs/java.svg";
import javascript from "../svgs/javascript.svg";
import laravel from "../svgs/laravel.svg";
import mongo from "../svgs/mongo.svg";
import mysql from "../svgs/mysql.svg";
import nestjs from "../svgs/nestjs.svg";
import nginx from "../svgs/nginx.svg";
import php from "../svgs/php.svg";
import phpstorm from "../svgs/phpstorm.svg";
import postman from "../svgs/postman.svg";
import python from "../svgs/python.svg";
import react from "../svgs/react.svg";
import spring from "../svgs/spring.svg";
import sqlserver from "../svgs/sqlserver.svg";
import tailwindcss from "../svgs/tailwindcss.svg";
import typescript from "../svgs/typescript.svg";
import ubuntu from "../svgs/ubuntu.svg";
import vscode from "../svgs/vscode.svg";
import vue from "../svgs/vue.svg";
import jquery from "../svgs/jquery.svg";
import cpp from "../svgs/cpp.svg";
import c from "../svgs/c.svg";
import dotNet from "../svgs/dot-net-core.svg";

export const slides = [
  // Frameworks/Platforms
  { id: 1, title: "Laravel", image: laravel },
  { id: 2, title: "NestJS", image: nestjs },
  { id: 3, title: "FastAPI", image: fastapi },
  { id: 4, title: "Spring", image: spring },
  { id: 41, title: "Dot Net Core", image: dotNet },
  { id: 5, title: "Vue", image: vue },
  { id: 6, title: "React", image: react },

  // Tools
  { id: 20, title: "Docker", image: docker },
  { id: 22, title: "Git", image: git },
  { id: 21, title: "Nginx", image: nginx },
  { id: 24, title: "Apache", image: apache },
  { id: 28, title: "GitHub", image: github },
  { id: 29, title: "GitLab", image: gitlab },

  // Databases
  { id: 7, title: "MySQL", image: mysql },
  { id: 8, title: "MongoDB", image: mongo },
  { id: 9, title: "SQLServer", image: sqlserver },
  { id: 10, title: "Firebase", image: firebase },

  // Languages
  { id: 11, title: "PHP", image: php },
  { id: 12, title: "Python", image: python },
  { id: 13, title: "JavaScript", image: javascript },
  { id: 14, title: "TypeScript", image: typescript },
  { id: 15, title: "Golang", image: golang },
  { id: 16, title: "Java", image: java },
  { id: 17, title: "C#", image: csharp },
  { id: 18, title: "C++", image: cpp },
  { id: 19, title: "C", image: c },

  // Tools
  { id: 23, title: "Postman", image: postman },
  { id: 26, title: "VSCode", image: vscode },
  { id: 27, title: "PHPStorm", image: phpstorm },
  { id: 25, title: "Ubuntu", image: ubuntu },

  // UI/UX Libraries
  { id: 30, title: "Bootstrap", image: bootstrap },
  { id: 31, title: "TailwindCSS", image: tailwindcss },
  { id: 32, title: "HTML5", image: html5 },
  { id: 33, title: "CSS3", image: css3 },
  { id: 34, title: "jQuery", image: jquery },
  { id: 35, title: "AntDesign", image: antdesign },

  // Mobile Platforms
  { id: 36, title: "Android", image: android },
];

export const projects = [
  {
    name: "Dabi Client Portal - Pogofdev",
    slug: "dabi-client-portal",
    date: "August 2024 - September 2024",
    image: "/images/dabi.jpg",
    file: "/files/dabi.md",
    top: true,
    deploy: "production",
    // link: "https://dabi.vn",
    description:
      "The project is a CMS website designed to manage clubs, optimizing member organization and management, while integrating automation features. The system allows each club to be managed independently through its own domain, making operations more efficient.",
  },
  {
    name: "Evermore Bakery Laravel",
    slug: "evermore-bakery-laravel",
    date: "March 2024 - May 2024",
    image: "/images/evermore-bakery-laravel.png",
    url: "https://gitlab.com/ChisThanh/evermore-bakery.git",
    file: "/files/evermore-laravel.md",
    // link: "http://web.chithanh.id.vn",
    top: true,
    deploy: "staging",
    description:
      "The project is an online cake store website designed to provide a convenient and seamless shopping experience for users. The website integrates an intelligent chatbot that suggests products based on customer interactions and search keywords related to the products, helping users easily find their favorite cakes or the most suitable ones.",
  },
  {
    name: "Sneaker Shops",
    slug: "sneaker-shop",
    date: "March 2024 - May 2024",
    image: "/images/sneakers-shop.png",
    url: "https://github.com/ChisThanh/sneakers-shop",
    file: "/files/sneaker-shop-laravel.md",
    top: true,
    description:
      "A website for selling sneakers, built with Laravel, MySQL, jQuery, Bootstrap, and Docker.",
  },
  {
    name: "Store administration website",
    slug: "store-administration-website",
    date: "May 2024 - 2024",
    image: "/images/admin-vue.png",
    url: "https://github.com/ChisThanh/admin-fullstack",
    file: "/files/admin-fullstack.md",
    top: true,
    description:
      "A website for helps manage products, sales revenue, built with Laravel, MySQL and Vue3.",
  },
  {
    name: "Flower Shop ASP.NET",
    slug: "flower-shop-asp-net",
    date: "April 2022 - June 2022",
    image: "/images/flower-shop.png",
    url: "https://github.com/ChisThanh/ShopHoa-ASP.NET",
    file: "/files/flower-shop-asp-net.md",
    top: true,
    description:
      "A website for selling flowers, built with ASP.NET Core, Entity Framework Core, SQL Server, and Bootstrap.",
  },
  {
    name: "Evermore Bakery",
    slug: "evermore-bakery",
    date: "March 2024 - April 2024",
    image: "/images/android-evermore.png",
    url: "https://github.com/ChisThanh/EvermoreBakery",
    file: "/files/ever-more-bakery.md",
    top: true,
    description:
      "An android app for selling cakes, built with Java, SQLite, and Android Studio.",
  },
  {
    name: "Read novel android",
    slug: "read-novel-android",
    date: "March 2024 - April 2024",
    image: "/images/android-book.jpg",
    url: "https://github.com/ChisThanh/LuxNovel",
    file: "/files/read-novel-android.md",
    top: true,
    description:
      "An android app for reading novels, built with Java, Spring boot, MySQL, SQLite, and Android Studio.",
  },
  {
    name: "Manager Highland Coffee",
    slug: "manager-highland-coffee",
    date: "January 2022 - June 2022",
    image: "/images/winform-coffie.png",
    url: "https://github.com/ChisThanh/Managing-Highlands-Coffee-Winform",
    file: "/files/manager-highland-coffee.md",
    top: true,
    description:
      "A desktop app for managing Highland Coffee, built with C#, SQL Server, and Winform.",
  },
  {
    name: "Bus Ticket Management",
    slug: "bus-ticket-management",
    date: "January 2022 - June 2022",
    image: "/images/winform-bus.png",
    url: "https://github.com/ChisThanh/QuanLyVeXe-Winform",
    file: "/files/bus-ticket-management.md",
    description:
      "A desktop app for managing bus tickets, built with C#, SQL Server, and Winform.",
  },
  {
    name: "Data analysis",
    date: "2024",
    url: "https://github.com/ChisThanh/Analyze-customer-satisfaction-with-products",
    description:
      "Analyze customer satisfaction with products using LSTM model, TF-IDF Python.",
  },
  {
    name: "Image Captioning VGG16 LSTM",
    date: "2023",
    url: "https://github.com/ChisThanh/API-Image-Captioning-VGG16-LSTM",
    description: "Image Captioning using VGG16, LSTM model, Flask, and Python.",
  },
  {
    name: "Manager Coffee Shop Winform",
    date: "2022",
    url: "https://github.com/ChisThanh/QuanLyQuanCafe-Winform",
    description:
      "A desktop app for managing coffee shop, built with C#, SQL Server, and Winform.",
  },
  {
    name: "Frontend Website Clothing Shop",
    date: "2022",
    url: "https://github.com/ChisThanh/Frontend-HTML-CSS-JS",
    description:
      "A frontend website for clothing shop, built with HTML, CSS, JS.",
  },
  {
    name: "Job brokerage website Laravel",
    date: "2021",
    url: "https://github.com/ChisThanh/web_moi_gioi-Laravel",
    description:
      "A website for job brokerage, built with Laravel, MySQL, jQuery, Bootstrap.",
  },
  {
    name: "Course Management Laravel",
    date: "2021",
    url: "https://github.com/ChisThanh/Course-Management-Laravel",
    description:
      "A website for managing courses, built with Laravel, MySQL, jQuery, Bootstrap.",
  },
  {
    name: "Website selling mobile phones",
    date: "2021",
    url: "https://github.com/ChisThanh/web_php",
    description:
      "A website for selling mobile phones, built with PHP, MySQL, HTML, CSS, JS.",
  },
];
