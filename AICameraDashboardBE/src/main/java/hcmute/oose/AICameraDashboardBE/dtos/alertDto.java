package hcmute.oose.AICameraDashboardBE.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class alertDto {

    String alertId;

    String content;

    String areaId;

    String securityLevel;

    LocalDate time;

    String playBack;

    alertSettingDto alertSetting;
}
