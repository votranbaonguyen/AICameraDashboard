
package hcmute.oose.AICameraDashboardBE.entities;

import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "alertSettings")
public class alertSettingEntity {

    @Id
    String alertSTId;

    String alertName;

    LocalTime startTime;

    LocalTime endTime;

    String secLevel;

    String imgLink;

    areaDto area;
}
