import React from "react";
import Footer from "../../containers/Footer/Footer";
import Navbar from "../../containers/Navbar/Navbar";
import SearchBar from "../../containers/SearchBar/SearchBar";

function Admin() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="container admin-panel">
        <div className="row justify-content-center">
          <h1>Hello World</h1>
          <table
            id="example"
            class="table table-dark text-center"
            style={{ width: "90%" }}
          >
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">E-mail</th>
                <th scope="col">Password</th>
                <th scope="col">registration date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>Edinburgh</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>Tokyo</td>  
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Admin;
