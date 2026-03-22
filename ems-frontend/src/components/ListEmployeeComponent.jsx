import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import './Employee.css';

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function addNewEmployee() {
    navigator('/add-employee');
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    const confirmDelete = window.confirm("Delete this employee?");
    if (!confirmDelete) return;

    deleteEmployee(id)
      .then(() => {
        setEmployees(prev => prev.filter(emp => emp.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">

      {/* HEADER */}
      <div className="terminal-header">
        <h2 className="terminal-title">EMPLOYEES</h2>

        <button className="game-btn" onClick={addNewEmployee}>
          + ADD EMPLOYEE
        </button>
      </div>

      {/* LOADING */}
      {loading ? (
        <h5 className="loading-text">Initializing system...</h5>
      ) : (

        <div className="terminal-container">

          {employees.map((employee) => (
            <div key={employee.id} className="terminal-row">

              <div className="terminal-line">
                <span className="label">ID</span>
                <span className="value">{employee.id}</span>
              </div>

              <div className="terminal-line">
                <span className="label">NAME</span>
                <span className="value">
                  {employee.firstName} {employee.lastName}
                </span>
              </div>

              <div className="terminal-line">
                <span className="label">EMAIL</span>
                <span className="value">{employee.email}</span>
              </div>

              <div className="terminal-actions">
                <button 
                  className="action-btn edit"
                  onClick={() => updateEmployee(employee.id)}
                >
                  EDIT
                </button>

                <button 
                  className="action-btn delete"
                  onClick={() => removeEmployee(employee.id)}
                >
                  DELETE
                </button>
              </div>

            </div>
          ))}

        </div>

      )}

    </div>
  );
};

export default ListEmployeeComponent;