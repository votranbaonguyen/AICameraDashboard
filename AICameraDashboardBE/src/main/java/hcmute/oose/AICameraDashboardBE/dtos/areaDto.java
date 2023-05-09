package hcmute.oose.AICameraDashboardBE.dtos;

import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class areaDto {
    String areaId;

    cameraDto camera;

    String areaName;
}
