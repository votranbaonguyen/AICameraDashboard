package hcmute.oose.AICameraDashboardBE.entities;

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
    String areaId;

    String resource;


}
