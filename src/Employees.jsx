import { useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";


const Employees = () => {
  const [selectedTeam, setTeam] = useState("Team B");

  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "Team A"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "Team B"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "Team C"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "Team D"
  }]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
    console.log(event.target.value)
  }
  function handleEmployeeCardClick(event) {
    const clickedEmployeeId = parseInt(event.currentTarget.id);

    const transformedEmployees = employees.map((employee) => {

      return (clickedEmployeeId===employee.id)?(employee.teamName===selectedTeam)?{...employee,teamName:""}:{...employee,teamName:selectedTeam}:employee

 //      if (employee.id === clickedEmployeeId) {

 //        if (employee.teamName === selectedTeam) {
 //          return { ...employee, teamName: "" };
 //        }
 //        else {

 //          return { ...employee, teamName: selectedTeam }
 //        }
 // }
 //      else {
 //        return employee
 //      }


    });

    setEmployees(transformedEmployees);

  }

  return (
    <main className="container ">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6 ">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="Team A" className="">Team A</option>
            <option value="Team B" className="">Team B</option>
            <option value="Team C" className="">Team C</option>
            <option value="Team D" className="">Team D</option>

          </select>
        </div>
      </div>


      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div id={employee.id} className={(employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2 ")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>

                  <img src={employee.gender == "female" ? femaleProfile : maleProfile} className="card-img-top" />



                  <div className="card-body">
                    <h5 className="card-title">{employee.fullName}</h5>
                    <p className="card-text">{employee.designation}</p>
                    <p>Team: {employee.teamName}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;