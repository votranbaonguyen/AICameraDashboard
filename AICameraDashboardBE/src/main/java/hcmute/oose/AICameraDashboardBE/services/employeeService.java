package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.employeeDto;
import hcmute.oose.AICameraDashboardBE.entities.employeeEntity;

import java.util.List;

public interface employeeService {

    employeeEntity addEmployee(employeeDto dto);
    employeeEntity updateEmployee(employeeDto dto);

    boolean deleteEmployee(String id);
    employeeDto getOneEmployee(String id);
    List<employeeDto> getAllEmployee();
}
