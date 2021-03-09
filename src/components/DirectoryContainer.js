import React, { Component } from "react";
import API from "../util/API";
import TableBody from "./TableBody";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "../components/TableRow";
import PageHeader from './PageHeader';
import NavSortButton from './NavSortButton';
import NavBar from './NavBar';
import NavFilterButton from './NavFilterButton';
import ResetButton from './ResetButton';

class DirectoryContainer extends Component {
  state = {
    employees: [],
    allEmployees: [],
  };

 
  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        this.setState({ employees: JSON.parse(JSON.stringify(res.data.results)) });
        this.setState({ allEmployees: JSON.parse(JSON.stringify(res.data.results)) });
        console.log(this.state.employees);
      })
      .catch((err) => console.log(err));
  }

  sortByAge = () => {
    let sortedEmployees = this.state.employees.sort((a, b) => {
      return a.dob.age - b.dob.age
      })
      this.setState({employees: sortedEmployees})
  }

  filterUnitedStates = () => {
    let filtered = this.state.employees.filter(employee => employee.location.country === "United States");
    this.setState({employees: filtered});
  }

  reset = () => {
    this.setState({employees: this.state.allEmployees});
  }

  render() {
    return (
      <div>
        <NavBar>
          <NavSortButton
          sortByAge={this.sortByAge}/>
          <NavFilterButton
          filterUnitedStates={this.filterUnitedStates}/>
          <ResetButton 
          reset={this.reset}/>
        </NavBar>

        <PageHeader/>
          <Table>
            <TableHeader />
              <TableBody>
              <TableRow  
                employees={this.state.employees}
              />
            </TableBody>
          </Table>
      </div>
      
    );
  }
}

export default DirectoryContainer;
