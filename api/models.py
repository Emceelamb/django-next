from django.db import models

# Create your models here.

class Todo(models.Model):
    todo  = models.CharField(max_length=320)

    STATUS_CHOICES = [
        ('TD', 'To Do'),
        ('IP', 'In Progress'),
        ('DN', 'Done'),
    ]

    status = models.CharField(
            max_length=2,
            choices=STATUS_CHOICES,
            default='TD'
    )

    def __str__(self):
        return self.todo
