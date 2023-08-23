import TeamMemberCard from "./TeamMemberCard"
const TeamMembers = ({ employees, selectedTeam, handleEmployeeCardClick }) => {
  return (
    <div className="card-collection">
      {
        employees.map((employee) => (
         <TeamMemberCard 
           selectedTeam={selectedTeam} 
           employee={employee} 
           handleEmployeeCardClick={handleEmployeeCardClick} />
        ))
      }
    </div>
  )
}
export default TeamMembers