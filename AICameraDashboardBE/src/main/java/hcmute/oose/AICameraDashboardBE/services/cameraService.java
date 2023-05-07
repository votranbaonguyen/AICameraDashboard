package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;

public interface cameraService {

    public void addCamera(cameraDto dto);
    public boolean removeCamera(String Id);
    public cameraDto getInfoCamera(String Id);

}
