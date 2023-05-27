"use strict";
exports.__esModule = true;
[];
var listProject = [
    {
        id: 1,
        name: "tien",
        image: "https://ap.poly.edu.vn/#",
        link: "khg",
        member: 3
    },
    {
        id: 2,
        name: "ngan",
        image: "liuytdsx",
        link: "hgcfgh",
        member: 2
    },
    {
        id: 3,
        name: "thuy",
        image: "liuyf",
        link: "xdf",
        member: 5
    }
];
function getData(pro) {
    // console.log(pro)
    var app = document.querySelector("#app");
    app = pro.map(function (projects, index) {
        return "\n        <table class=\"table table-border\">\n        <thead>\n            <tr>\n                <th>STT</th>\n                <th>Ten</th>\n                <th>Anh</th>\n                <th>Link</th>\n                <th>Thanh vien</th>\n                <th>Thao tac</th>\n\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n        <td>".concat(index + 1, "</td>\n        <td>").concat(projects.name, "</td>\n        <td>").concat(projects.image, "</td>\n        <td>").concat(projects.link, "</td>\n        <td>").concat(projects.member, "</td>\n        <td>\n        <button class=\"btn btn-remove\">xoa</button>\n        </td>\n    </tr>\n        </tbody>\n    </table>\n        \n        ");
    }).join("");
}
getData(listProject);
var addProject = function (projects, newProject) {
    // return 1
};
addProject(listProject, 1234);
