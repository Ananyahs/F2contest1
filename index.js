let arr = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2,name:"vivek",age:"19",profession:"developer"},
    {id:3,name:"harsh",age:"20",profession:"admin"}
]

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
        {id:4,name:"Shushant",age:"20",profession:"Intern"}
    
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
        {id:10,name:"muskan",age:"22",profession:"sales"},
        {id:22,name:"jack",age:"21",profession:"Manager"},
        {id:33,name:"karan",age:"24",profession:"Product Enginers"}

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
