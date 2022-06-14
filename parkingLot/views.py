from django.shortcuts import render
from django.views import View
from django_request_mapping import request_mapping

@request_mapping("")
class MyView(View):

    @request_mapping("/", method="get")
    def home(self, request):
        return render(request, 'index.html')

    @request_mapping("/check", method="get")
    def check_parking(self, request):
        return render(request, 'check-parking.html')
