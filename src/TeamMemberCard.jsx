import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import DataContext from "./context/DataContext";
import {useContext} from "react";
const TeamMemberCard=({employee})=>{

const {selectedTeam,handleEmployeeCardClick}=useContext(DataContext);

  
  return(
     <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2 ")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>

            <img src={employee.gender == "female" ? femaleProfile : maleProfile} 
                 className="card-img-top" />



            <div className="card-body">
              <h5 className="card-title">{employee.fullName}</h5>
              <p className="card-text">{employee.designation}</p>
              <p>{(employee.teamName === "") ? "" : "Team: " + employee.teamName}</p>
            </div>
          </div>
  )
}
export default TeamMemberCard