# 프로젝트명
> 장애인 주차구역 단속 서비스  

## AI, BigData, Cloud, IoT 4개의 분야가 모여 융복합 프로젝트 진행  
> 장애인 주차구역에 일반 차량이 주차 하였을 경우 경보를 울리며 자동으로 신고접수가 되는 서비스  

# 아키텍처 구성도
<img width="944" alt="화면 캡처 2022-09-04 190922" src="https://user-images.githubusercontent.com/12439450/188308275-ae59f0cb-544a-425c-935c-470e8bf38a3e.png">

# 라즈베리파이 연결도
<img width="679" alt="화면 캡처 2022-09-04 233602" src="https://user-images.githubusercontent.com/12439450/188318977-98a1ed3e-d969-4100-9b19-f28c5a7f7443.png">

# 사용 환경 및 역활
공통 언어 <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white"/>
> ## AI  
- 학습 데이터 수집  
- 데이터 전처리(augmentation)  
- 모델링(YOLOv5l, CNN, tesseract)  
> ## BigData
- 주제 선정 배경 및 기대 효과  
- AI - IoT 파이프라인 구축  
- 입지 분석
> ## Cloud  
- AWS Cloud 인프라 구축 <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=Amazon EC2&logoColor=white"/>  
- DataBase 구축 <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>  
- 웹페이지 배포 Amazon Route 53 -> <img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white"/> -> <img alt="docker"  src="https://img.shields.io/badge/Docker-#2496ED?style=flat-square&logo=Docker&logoColor=white"/>
> ## IoT  
- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/Raspberry Pi-A22846?style=flat-square&logo=Raspberry Pi&logoColor=white"/> <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white"/>
- MQTT를 활용한 통신 환경 구축  
- Raspberry Pi와 각종 센서 연결 및 모형 제작  
- 웹페이지 제작 및 DB연동 (Django 환경, Django ORM으로 DB사용)


# 프로젝트 기능
> ## AI  
- IoT에서 전달받은 이미지 Amazon S3 저장  
- 이미지 전달받으면 번호판, 장애인 스티커 판별 후 Web에 전송  
> ## IoT  
- 입차 시 초음파 센서로 차량 인식 후 번호판, 장애인 스티커 사진 촬영
- 사진 AI 모델과 Web에 전송
- AI에서 이미지 판독되면 DB에 저장
- 사진 판독이 에러가 나면 Web 관리자 페이지에 판독 error 알림 -> 차량 사진 보고 관리자가 수정
- 주차 공간에 초음파 센서를 달아서 장애인 주차 구역과 일반 구역에 주차가 되어 있는지 알기 위해 RGB LED로 차주에게 알림, 관리자 웹페이지에 실시간 확인
- 주차 공간에 초음파 센서에 감지되면 차량 번호판 AI에 사진 전송
- 판독 결과 DB에 저장되어 있는 번호판 비교 후 장애인 차량 확인
- 장애인 차량이 아닌 경우 - 경보를 울리며 차를 빼달라는 음성 출력(kakao API 사용), 관리자 웹 페이지에 위반차량 알림
- 관라자 페이지에서 현재 입차 차량과 위반차량 모두 볼 수 있음.

# 프로젝트 시행 영상 gif 영상  
#### 차량 번호, 얼굴 나오는것은 모자이크 처리 했습니다. 밑에 원본 링크 있으니 소리까지 들으시려면 링크로 이동하시면 됩니다.  
#### 용량 때문에 화질과 프레임 낮게 나옵니다 ㅠ
![시퀀스 01](https://user-images.githubusercontent.com/12439450/188315902-0f6854c0-61f7-46b7-8db1-f06e94946be2.gif)
---
![시퀀스 02](https://user-images.githubusercontent.com/12439450/188316695-bad74f70-4077-4f9e-8c52-58dd71444696.gif)
---
![시퀀스 03](https://user-images.githubusercontent.com/12439450/188317135-d605ed64-55f7-4425-993a-2ac091563cd3.gif)
---
![시퀀스 04](https://user-images.githubusercontent.com/12439450/188317276-f25ec477-456a-48a9-a932-f935d2947f49.gif)
---
![시퀀스 05](https://user-images.githubusercontent.com/12439450/188317526-7caabf3c-97b6-4373-a71a-76b98ad3c1bb.gif)
---
![시퀀스 06](https://user-images.githubusercontent.com/12439450/188317604-3526b1b7-d12c-4908-b23b-e362abd998b8.gif)

# [전체 소스코드, WBS, PPT 발표자료, 실행 영상 등 링크](https://drive.google.com/drive/folders/1SSiEPprD62wwLsntKh4JUHFOFTiqGvvh)
