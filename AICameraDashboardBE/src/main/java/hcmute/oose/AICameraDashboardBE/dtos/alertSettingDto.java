package hcmute.oose.AICameraDashboardBE.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class alertSettingDto {

    String alertSTId;

    String alertName;

    LocalTime startTime;

    LocalTime endTime;

    String secLevel;

    String imgLink;

    areaDto area;
}
