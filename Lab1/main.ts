export {}
// Bai 1: 
interface IProjectList  {
    id: number,
    name: string,
    image: string,
    link: string,
    member: number
}[];

const listProject: IProjectList[] = [
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

function getData(pro: IProjectList[]): any {
    // console.log(pro)
    const app = document.querySelector("#app")

    app = pro.map((projects, index)=>{
        return `
        <table class="table table-border">
        <thead>
            <tr>
                <th>STT</th>
                <th>Ten</th>
                <th>Anh</th>
                <th>Link</th>
                <th>Thanh vien</th>
                <th>Thao tac</th>

            </tr>
        </thead>
        <tbody>
        <tr>
        <td>${index + 1}</td>
        <td>${projects.name}</td>
        <td>${projects.image}</td>
        <td>${projects.link}</td>
        <td>${projects.member}</td>
        <td>
        <button class="btn btn-remove">xoa</button>
        </td>
    </tr>
        </tbody>
    </table>
        
        `
    }).join("");
}
getData(listProject);

// bai 2:

interface IAddProject {
    (data: IProjectList[]): IProjectList[]
}
const addProject: IAddProject = (projects:number|string, newProject:number) =>{
    // return 1
}
addProject(listProject, 1234)
