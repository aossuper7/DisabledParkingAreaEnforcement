from django.db import models

class Car(models.Model):
    car_number = models.CharField(max_length=10, blank=True, null=True)
    handicap = models.CharField(max_length=2, blank=True, null=True)
    enter = models.DateField(blank=True, null=True)
    img = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'car'