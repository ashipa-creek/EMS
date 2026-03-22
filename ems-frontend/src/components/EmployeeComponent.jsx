import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate,useParams } from 'react-router-dom';
import './EmployeeForm.css';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const navigator = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    if(id){
      getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch((error) => {
        console.log(error);
      }); 
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = {firstName, lastName, email};
    if(validateForm()){
      if(id){
        updateEmployee(id, employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch((error) => {
          console.log(error);
        });
      } else {
        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch((error) => {
          console.log(error);
        });
      }
      console.log(employee);
    }
  }

  function validateForm() {
    let valid =true;
    const errorsCopy = {...errors};

    if(firstName.trim()){
      errorsCopy.firstName = '';
    } else{
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }
    if(lastName.trim()){
      errorsCopy.lastName = '';
    } else{
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }
    if(email.trim()){
      errorsCopy.email = '';
    } else{
      errorsCopy.email = 'Email is required';
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update Employee</h2>;
    }
    else{
      return <h2 className='text-center'>Add Employee</h2>;
    }
  }

  return (
  <div className="container">

    <div className="terminal-form">

      <h2 className="terminal-title">
        {id ? "UPDATE EMPLOYEE" : "ADD EMPLOYEE"}
      </h2>

      <form>

        {/* FIRST NAME */}
        <div className="form-group">
          <label>FIRST NAME</label>
          <input
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={errors.firstName ? "input error" : "input"}
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>

        {/* LAST NAME */}
        <div className="form-group">
          <label>LAST NAME</label>
          <input
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={errors.lastName ? "input error" : "input"}
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "input error" : "input"}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <button className="submit-btn" onClick={saveOrUpdateEmployee}>
          {id ? "UPDATE" : "SUBMIT"}
        </button>

      </form>

    </div>

  </div>
);
}

export default EmployeeComponent
