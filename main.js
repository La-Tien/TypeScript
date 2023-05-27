"use strict";
// exports.__esModule = true;
// let username: string;
// username = "Tienlt";
// username = "123";
// console.log(username)
// const phoneNumber: number = 123456789;
// const arrNumber: number[] = [1, 2, 3];
// const arrStr: string[] = ["1,2,3", "abcd"];
// const arrMix: Array<string | number> = ["abcd", 1, 2, 3]
// const project: { id: number, name: string, email?: string } = {
//     id: 1,
//     name: "Tien",
//     email: "tienltph19794@fpt.edu.vn"
// }
// function sum(a:number, b:number): any {
//     let result = a+b;
//     return result;
// }
// sum(10, 20);
/*
khai báo 1 object tên projects chứa các thuộc tính sau
id
name
image
link
status

tạo 1 hàm nhận vào 1 tham số (tham số nhận vào là 1 object)
hàm thực hiện chức năng hiển thị ra màn hình dữ liệu của object nhận vào
hàm sẽ return về dữ liệu là object nhận vào trong tham số
*/
var projects = {
    id: 1,
    name: "Tien",
    image: "tienltph19794",
    link: "asdfvb",
    status: true
};
function AdminProject(pro) {
    console.log(pro);
    return pro;
}
AdminProject(projects);
// Khai báo 1 mảng projectList 
// mảng này chứa 2 object, mỗi object có 2 thuộc tính là id và name
// Định nghĩa kiểu dữ liệu cho mảng projectList vừa tạo
var arrStr = ["1,2,3", "abcd"];
var projectList = [
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb",
        status: true
    }
];
var arrMix = ["abcd", 1, 2, 3];
var projectLists = [
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb",
        status: true
    },
    {
        id: 2,
        name: "La thi tien",
        image: "oihgfdfghjk",
        link: "lkjhgvbn",
        status: false
    }
];
var project = {
    id: 1,
    name: "Tien",
    image: "tienltph19794",
    link: "asdfvb",
    status: true
};
function getData(pro) {
    // console.log(pro)
    return pro;
}
getData(project);
var projectlist = [
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb",
        status: true
    },
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb",
        status: "false"
    },
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb"
    }
];
var sum = function (a, b) {
    return 123;
};
sum(10, 20);
var add = function (a) {
    return a;
};
add(projectlist);
var tien = {
    id: 9,
    name: "Tien",
    email: "tienltph19794@fpt.edu.vn"
};
