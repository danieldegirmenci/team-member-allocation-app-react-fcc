import Teams from "./Teams"
import TeamMembers from "./TeamMembers"


const Employees = () => {


  return (
    <main className="container ">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6 ">
          <Teams  />
        </div>
      </div>


      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-10">
            <TeamMembers />
           </div>
      </div>
    </main>
  );
};

export default Employees;