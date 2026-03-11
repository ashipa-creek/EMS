package net.javag.ems_backend.service.impl;

import lombok.AllArgsConstructor;
import net.javag.ems_backend.dto.EmployeeDto;
import net.javag.ems_backend.entity.Employee;
import net.javag.ems_backend.mapper.EmployeeMapper;
import net.javag.ems_backend.repository.EmployeeRepository;
import net.javag.ems_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

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
        employeeRepository.findById(employeeId);
        return null;
    }
}
