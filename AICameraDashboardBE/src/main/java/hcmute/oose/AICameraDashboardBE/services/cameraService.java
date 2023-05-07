package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;

public interface cameraService {

    public void addOrUpdateCamera(cameraDto dto);
    public boolean removeCamera(String Id);
    public cameraDto getInfoCamera(String Id);

}
