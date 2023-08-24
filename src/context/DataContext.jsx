import { useState, useEffect, createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {


  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "Team A");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [{
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

  const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers())


  function groupedTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter((employee) => employee.teamName === "Team A");
    var teamA = { team: "Team A", members: teamAMembers, collapsed: selectedTeam === "Team A" ? false : true }
    teams.push(teamA);

    var teamBMembers = employees.filter((employee) => employee.teamName === "Team B");
    var teamB = { team: "Team B", members: teamBMembers, collapsed: selectedTeam === "Team B" ? false : true }
    teams.push(teamB);

    var teamCMembers = employees.filter((employee) => employee.teamName === "Team C");
    var teamC = { team: "Team C", members: teamCMembers, collapsed: selectedTeam === "Team C" ? false : true }
    teams.push(teamC);

    var teamDMembers = employees.filter((employee) => employee.teamName === "Team D");
    var teamD = { team: "Team D", members: teamDMembers, collapsed: selectedTeam === "Team D" ? false : true }
    teams.push(teamD);

    return teams;

  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
      ? { ...groupedData, collapsed: !groupedData.collapsed }
      : groupedData);

    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);

  }

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees))

  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam))


  }, [selectedTeam])

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
    console.log(event.target.value)
  }
  function handleEmployeeCardClick(event) {
    const clickedEmployeeId = parseInt(event.currentTarget.id);


    const transformedEmployees = employees.map((employee) => {

      return (clickedEmployeeId === employee.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: "" } : { ...employee, teamName: selectedTeam } : employee

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

    setEmployees(transformedEmployees)

  }



  return <DataContext.Provider value={{ employees, selectedTeam, setTeam, handleTeamSelectionChange, handleEmployeeCardClick, groupedTeamMembers, handleTeamClick,groupedEmployees }}>
    {children}
  </DataContext.Provider>






};

export default DataContext;