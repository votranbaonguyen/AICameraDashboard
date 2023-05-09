package hcmute.oose.AICameraDashboardBE.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "alerts")
public class alertEntity {
    @Id
    String alertId;

    String content;

    String areaId;

    String securityLevel;

    Date time;

    String playBack;

    String fromSettingId;
}
