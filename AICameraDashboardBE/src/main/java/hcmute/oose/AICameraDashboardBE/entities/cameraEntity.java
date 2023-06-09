package hcmute.oose.AICameraDashboardBE.entities;

import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
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
@Document(collection = "cameras")
public class cameraEntity extends BaseEntity{

    @Id
    String camId;

    String camName;
    areaDto area;

    String resource;

    Boolean connectionState = true;
    String securityLevel;
}
