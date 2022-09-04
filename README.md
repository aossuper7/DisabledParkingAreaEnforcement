# 프로젝트명
> 장애인 주차구역 단속 서비스  

## AI, BigData, Cloud, IoT 4개의 분야가 모여 융복합 프로젝트 진행  
> 장애인 주차구역에 일반 차량이 주차 하였을 경우 경보를 울리며 자동으로 신고접수가 되는 서비스  

# 아키텍처 구성도
<img width="944" alt="화면 캡처 2022-09-04 190922" src="https://user-images.githubusercontent.com/12439450/188308275-ae59f0cb-544a-425c-935c-470e8bf38a3e.png">

# 사용 환경 및 역활
> ## AI  
- 학습 데이터 수집  
- 데이터 전처리(augmentation)  
- 모델링(YOLOv5l, CNN, tesseract)  
> ## BigData
- 주제 선정 배경 및 기대 효과  
- AI - IoT 파이프라인 구축  
- 입지 분석
> ## Cloud  
- AWS Cloud 인프라 구축 (Amazon EC2)  
- DataBase 구축 (MySQL)
- 웹페이지 배포 (Amazon Route 53 -> NGINX -> docker)
> ## IoT  
- MQTT를 활용한 통신 환경 구축  
- Raspberry Pi 장비 및 모형 제작  
- 웹페이지 제작 및 DB연동 (Django 환경, MySQL ORM 사용)


# 프로젝트 기능
> ## AI  
- IoT에서 전달받은 이미지 Amazon S3 저장  
- 이미지 전달받으면 번호판, 장애인 스티커 판별 후 Web에 전송  
> ## IoT  
- 입차 시 초음파 센서로 차량 인식 후 번호판, 장애인 스티커 사진 촬영
- 사진 AI 모델과 Web에 전송
- AI에서 이미지 판독되면 DB에 저장
- 사진 판독이 에러가 나면 Web 관리자 페이지에 판독 error 알림 -> 차량 사진 보고 관리자가 수정
- 주차 공간에 초음파 센서를 달아서 장애인 주차 구역과 일반 구역에 주차가 되어 있는지 알기 위해 RGB LED로 차주에게 알림, 관리자 웹페이지에 실시간 
- 주차 공간에 초음파 센서에 감지되면 차량 번호판 AI에 사진 전송
- 판독 결과 DB에 저장되어 있는 번호판 비교 후 장애인 차량 확인
- 장애인 차량이 아닌 경우 - 경보를 울리며 차를 빼달라는 음성 출력(kakao API 사용), 관리자 웹 페이지에 위반차량 알림
- 관라자 페이지에서 현재 입차 차량과 위반차량 모두 볼 수 있음.

# 8개의 팀중에 1등  
### 각 분야의 전문가님(총 4명) 평가와 8개의 팀 평가를 진행 하였음.
<img width="600" src="https://user-images.githubusercontent.com/12439450/188309756-2d107923-71f5-4a87-9660-0032263c9f51.jpg">

# [전체 소스코드, WBS, PPT 발표자료, 실행 영상 등 링크](https://drive.google.com/drive/folders/1SSiEPprD62wwLsntKh4JUHFOFTiqGvvh)
