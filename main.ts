export { }
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

const projects: { id: number, name: string, image: string, link: string, status: boolean } = {
    id: 1,
    name: "Tien",
    image: "tienltph19794",
    link: "asdfvb",
    status: true,
}

function AdminProject(pro: { id: number, name: string, image: string, link: string, status: boolean }): { id: number, name: string, image: string, link: string, status: boolean } {
    console.log(pro)

    return pro;
}
AdminProject(projects);

// Khai báo 1 mảng projectList 
// mảng này chứa 2 object, mỗi object có 2 thuộc tính là id và name
// Định nghĩa kiểu dữ liệu cho mảng projectList vừa tạo

const arrStr: string[] = ["1,2,3", "abcd"];

const projectList: { id: number, name: string, image: string, link: string, status: boolean }[] = [
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb",
        status: true,
    }
]

const arrMix: Array<string | number> = ["abcd", 1, 2, 3]
const projectLists: Array<{ id: number, name: string, image: string, link: string, status: boolean }> = [
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb",
        status: true,
    },
    {
        id: 2,
        name: "La thi tien",
        image: "oihgfdfghjk",
        link: "lkjhgvbn",
        status: false,
    }
]

// Định nghĩa kiểu dữ liệu interface
/*
    interface hỗ trợ các thuộc tính sau
        + required
        + optional
        + | (hoặc)
*/
// Object
interface IProjects {
    id: number,
    name: string,
    image: string,
    link: string,
    status: boolean
}
const project: IProjects = {
    id: 1,
    name: "Tien",
    image: "tienltph19794",
    link: "asdfvb",
    status: true,
}

function getData(pro: IProjects): IProjects {
    // console.log(pro)

    return pro;
}
getData(project);


// array
interface IProject {
    id: number,
    name: string,
    image: string,
    link: string,
    status?: boolean | string
}

const projectlist: IProject[] = [
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb",


        status: true,
    },
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb",


        status: "false",
    },
    {
        id: 1,
        name: "Tien",
        image: "tienltph19794",
        link: "asdfvb"


    }
]

// Function

interface ISumFunction {
    (a:number, b:number): number
}

const sum:ISumFunction = (a,b) =>{
    return 123
}
sum(10,20)

interface AddFunction {
    (data: IProject[]): IProject[]
}
const add:AddFunction = (a) =>{
    return a
}
add(projectlist)

// Định nghĩa kiểu DL type
// Object

// Array
type TProducts = {
    id: number,
    name: string,
    image: string,
    link: string,
    status?: boolean | string
}[]
// Function
// type GetFunction = (data: ProductList) => number

// interface IPerson {
//     id: number,
//     name: string
// }
// interface IEmployee extends IPerson {
//     email: string
// }

// const tienlt: IEmployee = {
//     id: 9,
//     name: "Tien",
//     email: "tienltph19794@fpt.edu.vn"
// }

type TPerson = {
    id: number,
    name: string
}
type TEmployee = {
    email: string
}

type TMansger = TPerson & TEmployee 
const tien: TMansger = {
    id: 9,
    name: "Tien",
    email: "tienltph19794@fpt.edu.vn"
}