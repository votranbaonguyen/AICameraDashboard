package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.employeeDto;
import hcmute.oose.AICameraDashboardBE.entities.employeeEntity;
import hcmute.oose.AICameraDashboardBE.repositories.employeeRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class employeeServiceImpl implements employeeService{

    private final employeeRepository employeeRepository;

    public employeeServiceImpl(hcmute.oose.AICameraDashboardBE.repositories.employeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public employeeEntity addEmployee(employeeDto dto) {
        employeeEntity temp =
                new employeeEntity(null, dto.getName(), dto.getPhone(), dto.getAddress(), dto.getImgLink());

        employeeRepository.save(temp);
        return temp;
    }

    @Override
    public employeeEntity updateEmployee(employeeDto dto) {

        if (!employeeRepository.existsByEmployeeId(dto.getEmployeeId())){
            return null;
        }
        employeeEntity temp =
                new employeeEntity(dto.getEmployeeId(), dto.getName(), dto.getPhone(), dto.getAddress(), dto.getImgLink());

        employeeRepository.save(temp);
        return temp;
    }

    @Override
    public boolean deleteEmployee(String id) {

        Optional<employeeEntity> temp = employeeRepository.findById(id);
        if (!temp.isPresent()){
            return false;
        }
        employeeRepository.deleteById(id);
        return true;
    }

    @Override
    public employeeDto getOneEmployee(String id) {

        if (!employeeRepository.existsByEmployeeId(id)){
            return null;
        }
        Optional<employeeEntity> tmp = employeeRepository.findById(id);
        employeeEntity x = tmp.get();
        employeeDto dto = new employeeDto(x.getEmployeeId(), x.getName(),
                x.getPhone(), x.getAddress(), x.getImgLink());
        return dto;

    }

    @Override
    public List<employeeDto> getAllEmployee() {
        List<employeeDto> dto = new ArrayList<>();
        List<employeeEntity> entities = employeeRepository.findAll();
        entities.forEach(x -> dto.add(new employeeDto(x.getEmployeeId(), x.getName(),
                x.getPhone(), x.getAddress(), x.getImgLink())));

        return dto;
    }

    public List<employeeDto> getEmployeeByName(String name){
        List<employeeDto> dto = new ArrayList<>();
        List<employeeEntity> entities = employeeRepository.findByNameContainingIgnoreCase(name);
        entities.forEach(x -> dto.add(new employeeDto(x.getEmployeeId(), x.getName(),
                x.getPhone(), x.getAddress(), x.getImgLink())));

        return dto;
    }
}
