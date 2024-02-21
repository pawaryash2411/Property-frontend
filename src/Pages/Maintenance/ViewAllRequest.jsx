let ViewAllRequest = () => {
  return (
    <>
      <div className="container-fluid  my-5">
        <div className="row   my-5 ">
          <div className="col-md-5">
            <div className="bg-info p-1 text-light text-center rounded  mb-2 ">
              <h3> 0 </h3>
              <h5>Pending Maintenance Requests hiiiiiiiiiiii</h5>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-secondary p-1 text-light text-center rounded  mb-2">
              <h3> 0 </h3>
              <h5>Pending Maintenance Requests</h5>
            </div>
          </div>
          <div className="col-md-2">
            <div className="mt-4 mb-2">
              <button className="btn_add w-100 py-2  shadow  border-0  rounded bg-light  ">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8">
            <h4>Maintenance Completed</h4>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">Export Data</div>
              <div className="col-md-6">Clear All Filters</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-light">
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Description</th>
                    <th>Date</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewAllRequest;
