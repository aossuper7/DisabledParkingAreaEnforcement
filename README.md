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

# [전체 소스코드, WBS, PPT 등 링크](https://drive.google.com/drive/folders/1SSiEPprD62wwLsntKh4JUHFOFTiqGvvh)

