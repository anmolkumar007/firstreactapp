function Main(){
    const date = new Date();
    const emp = {
        empId:101,
        empName:"Anmol",
        empSalary:10000000
    }

    const{empId:id,empName:name,empSalary:sal} = emp;
    return(
        <div>
        <p>DATE: {date.toDateString()}</p>
        <p>ID: {id}</p>
        <p>NAME: {name}</p>
        <p>SALARY: {sal}</p>
        </div>
    );
}

export default Main;