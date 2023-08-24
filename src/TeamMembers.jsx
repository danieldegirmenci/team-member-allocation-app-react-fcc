import TeamMemberCard from "./TeamMemberCard"
import {useContext} from "react";
import DataContext from "./context/DataContext";

const TeamMembers = () => {
  const { employees }=useContext(DataContext);
  return (
    <div className="card-collection">
      {
        employees.map((employee) => (
         <TeamMemberCard key={employee.id} employee={employee} />
        ))
      }
    </div>
  )
}
export default TeamMembers