 const ShowData = ({ user }) => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{user.Name}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{user.Age}</td>
            </tr>
            <tr>
              <td>Department</td>
              <td>{user.Department}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{user.Address}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>{user.Salary}</td>
            </tr>
            <tr>
              <td>Marital</td>
              <td>{user.Marital}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  export default ShowData;