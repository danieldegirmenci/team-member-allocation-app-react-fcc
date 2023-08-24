import { useState, useContext } from "react";
import DataContext from "./context/DataContext";

const GroupedTeamMembers = () => {
  const { handleTeamClick,groupedEmployees } = useContext(DataContext);




  return (
    <main className="container">
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name:{item.team}

              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark"> Full Name: {member.fullName} </span>
                        </h5>
                        <p>Designation: {member.designation} </p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>

  )
}

export default GroupedTeamMembers;