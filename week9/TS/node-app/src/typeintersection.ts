type Employer ={
    name: string;
    startDate: Date;
};

interface Manager {
    name: string;
    department: string;
};

type TechLead = Employer & Manager;
// type TechLead = {
//     name: string;
//     department: string;
//     startDate: Date;
// }

const t: TechLead = {
    name:"user",
    department: "bio",
    startDate: new Date(),
}

console.log(t)