package net.javag.ems_backend.service.impl;

import lombok.AllArgsConstructor;
import net.javag.ems_backend.dto.EmployeeDto;
import net.javag.ems_backend.entity.Employee;
import net.javag.ems_backend.exception.ResourceNotFoundException;
import net.javag.ems_backend.mapper.EmployeeMapper;
import net.javag.ems_backend.repository.EmployeeRepository;
import net.javag.ems_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.maptoEmployee(employeeDto);
        Employee savedEmployee=employeeRepository.save(employee);

        return EmployeeMapper.maptoEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee=employeeRepository.findById(employeeId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Employee with the given id does not exist:"+employeeId));

        return EmployeeMapper.maptoEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees=employeeRepository.findAll();
            return employees.stream().map((employee)->EmployeeMapper.maptoEmployeeDto(employee))
                    .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        Employee employee=employeeRepository.findById(employeeId).orElseThrow(()->new ResourceNotFoundException("Employee Id is not in the data base:"+employeeId));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        Employee updatedEmployeeOdj=employeeRepository.save(employee);//insert or update

        return EmployeeMapper.maptoEmployeeDto(updatedEmployeeOdj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee=employeeRepository.findById(employeeId).orElseThrow(()->new ResourceNotFoundException("Employee Id is not in the data base:"+employeeId));
        employeeRepository.deleteById(employeeId);
    }
}
