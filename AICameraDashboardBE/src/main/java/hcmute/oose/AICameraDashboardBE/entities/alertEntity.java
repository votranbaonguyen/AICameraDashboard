package hcmute.oose.AICameraDashboardBE.entities;

import hcmute.oose.AICameraDashboardBE.dtos.alertSettingDto;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
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

    LocalDate time;

    String playBack;

    alertSettingDto alertSetting;
}
