/*
 Navicat Premium Data Transfer

 Source Server         : aidashboard
 Source Server Type    : MongoDB
 Source Server Version : 60005
 Source Host           : localhost:27017
 Source Schema         : AiCameraDashBoard

 Target Server Type    : MongoDB
 Target Server Version : 60005
 File Encoding         : 65001

 Date: 13/04/2023 13:08:34
*/


// ----------------------------
// Collection structure for accounts
// ----------------------------
db.getCollection("accounts").drop();
db.createCollection("accounts");

// ----------------------------
// Documents of accounts
// ----------------------------
db.getCollection("accounts").insert([ {
    _id: ObjectId("6411c9d5c5bd296ed0a36939"),
    email: "tvd@gmail.com",
    password: "123456",
    roles: [
        "ROLE_ADMIN"
    ],
    trangThai: true,
    createdDate: ISODate("2023-03-15T13:36:21.931Z"),
    lastModifiedDate: ISODate("2023-03-15T13:36:21.931Z"),
    userID: "tvd",
    accountName: "tran dan"
} ]);

// ----------------------------
// Collection structure for cameras
// ----------------------------
db.getCollection("cameras").drop();
db.createCollection("cameras");

// ----------------------------
// Documents of cameras
// ----------------------------
db.getCollection("cameras").insert([ {
    _id: "cameraId1",
    camName: "Cam1",
    areaId: "area1",
    resource: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jfKfPfyJRdk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    _class: "hcmute.oose.AICameraDashboardBE.entities.cameraEntity"
} ]);
db.getCollection("cameras").insert([ {
    _id: "cameraId2",
    camName: "Cam2",
    areaId: "area2",
    resource: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MVPTGNGiI-4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    _class: "hcmute.oose.AICameraDashboardBE.entities.cameraEntity"
} ]);
db.getCollection("cameras").insert([ {
    _id: "cameraId3",
    camName: "Cam3",
    areaId: "area3",
    resource: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MVPTGNGiI-4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    _class: "hcmute.oose.AICameraDashboardBE.entities.cameraEntity"
} ]);
