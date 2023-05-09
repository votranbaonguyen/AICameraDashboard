package hcmute.oose.AICameraDashboardBE.entities;

import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "areas")
public class areaEntity {

    @Id
    String areaId;

    cameraDto camera;

    String areaName;
}
