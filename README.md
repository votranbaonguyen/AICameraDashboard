# Nhóm 8: Phát triển hệ thống AI Camera Dashboard

## Công nghệ sử dụng
* Front-End: ReactJS, Antd
* Back-End: Java(Springboot)
* Database: MongooDB

## Các thành viên
1. Võ Trần Bảo Nguyên - MSSV: 20110138
2. Trần Văn Dân - MSSV: 20110451
3. Huỳnh Hồ Thọ Tỷ - MSSV: 20110597


## Cách deploy project bằng docker
Link video hướng dẫn: https://youtu.be/i7wWo8rnAUo
- **Bước 1:** Cài đặt git
- **Bước 2:** Cài đặt docker và docker compose.
- **Bước 3:** Clone repository theo đường dẫn: https://github.com/votranbaonguyen/AICameraDashboard.git
- **Bước 4:** Di chuyển vào thư mục chứa dự án và file docker-compose.yml:
Lệnh: cd AICameraDashboard/
- **Bước 5:** Chạy docker container:
Lệnh: docker-compose up hoặc docker-compose up -d
- **Bước 6:** Mở ứng dụng trên trình duyệt tại port 5173 để kiểm tra.
Mở trình duyệt tại với url: http:<ip>:5173
<ip> là ip của máy đang chạy docker, nếu đang chạy trên local thì thay thế bằng localhost




