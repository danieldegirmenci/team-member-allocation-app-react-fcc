import {useContext} from "react";
import DataContext from "./context/DataContext"

const Teams = () => {

  const { selectedTeam, handleTeamSelectionChange }=useContext(DataContext);
  return(
         <select 
              className = "form-select form-select-lg" 
              value={selectedTeam}   
              onChange={handleTeamSelectionChange}>
                       <option value="Team A">Team A</option>
                       <option value="Team B" >Team B</option>
                       <option value="Team C" >Team C</option>
                      <option value="Team D" >Team D</option>
         </select >
  )}

export default Teams