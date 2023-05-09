package hcmute.oose.AICameraDashboardBE.dtos.camera;

import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class cameraDto {

    String camId;
    String camName;
    areaDto area;
    String resource;
    Boolean connectionState = true;
    String securityLevel;
}
