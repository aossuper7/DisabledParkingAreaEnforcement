from django.shortcuts import render
from django.views import View
from django_request_mapping import request_mapping
from parkingLot.models import Parking
from django.http import JsonResponse
from datetime import datetime

@request_mapping("")
class MyView(View):

    @request_mapping("/", method="get")
    def home(self, request):
        return render(request, 'index.html')

    @request_mapping("/check", method="get")
    def check_parking(self, request):
        obj = Parking.objects.all()
        context = {'obj':obj}
        return render(request, 'check-parking.html', context)

    @request_mapping("/enter", method="get")
    def enter(self, request):
        obj = Parking.objects.all()
        context = {'obj': obj}
        return render(request, 'car-enter.html', context)

    @request_mapping("/dashboard", method="get")
    def dashboard(self, request):
        return render(request, 'dashboard.html')


    @request_mapping("/dataset", method="get")
    def dataset(self, request):
        img = request.GET.get('img')
        number = request.GET.get('number')
        handicap = request.GET.get('handicap')
        now = datetime.now()
        date = now.strftime('%Y-%m-%d %H:%M:%S')
        Parking.objects.create(img=img, car_number=number, handicap=handicap,  enter=date).save()
        print("db저장완료")
        return JsonResponse({"result": 1})