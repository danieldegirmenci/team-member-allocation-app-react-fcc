import {useLocation} from "react-router-dom";
import DataContext from "./context/DataContext";
import {useContext} from "react";


const Header = () => {
  const location=useLocation();

   const {selectedTeam, employees}=useContext(DataContext);
   const teamMemberCount=employees.filter((employee)=>employee.teamName===selectedTeam).length;

  
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1 >Team Member Allocation</h1>
          {
            location.key==="default"?"":
            
(          <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount===1?"member":"members"}</h3>)}
        </div>
      </div>
    </header>
    

  )
}

export default Header;