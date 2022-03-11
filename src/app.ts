// function sum(a: number, b: number):number {
//     return a + b;
// }
// const a: number = 10;
// const b: number = 20;
// const result = sum(a,b);
// console.log(result);
type TPerson={
    id: number;
    name: string;
    age: number;
    status?:boolean
}

const person:TPerson ={
    id:1,
    name: "Linh",
    age:24
}

const persons:TPerson[]= [
    {id:1, name:"Linh",age:24, status:true},
    {id:2, name:"Dun",age:20, status:false},
]
console.log(person.name)


type AppProps={
    message:string
}
const DemoApp=(props: AppProps) =>{
    console.log(props)
}
