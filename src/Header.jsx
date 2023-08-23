import {useLocation} from "react-router-dom";
const Header = ({ selectedTeam, teamMemberCount }) => {
  const location=useLocation();
  console.log(location);
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