/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
function PrintDeveloperbyMap(){
    arr.map((employee)=>{
        if(employee.profession === "developer"){
            console.log(employee);
        }
    })
}

function PrintDeveloperbyForEach(){
    arr.forEach((employee)=>{
        if(employee.profession === "developer"){
            console.log(employee);
        }
    })
}

function addData(){
    const newEmployee = 
        {id:4,name:"susan",age:"20",profession:"intern"}
    
    arr.push(newEmployee);
    console.log(newEmployee);


}

function  removeAdmin(){
    let admin ;
    const otherEmployee = arr.filter((employee)=>{
        return employee.profession !== "admin";
    })
    console.log(otherEmployee);
}


function concatenateArray(){
    let newArr = [
        {id:4,name:"kate",age:"32",profession:"tester"},
        {id:5,name:"lan",age:"25",profession:"designer"},
        {id:6,name:"peter",age:"21",profession:"data scientist"}

    ]
     
    const concntArray = [];

    arr.forEach((emp)=>{
        concntArray.push(emp);
    })

    newArr.forEach((emp)=>{
        concntArray.push(emp);
    })

    console.log(concntArray);
}
