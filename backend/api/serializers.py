from rest_framework import serializers
from .models import Todo 

class TodoSerializer(serializers.ModelSerializer):
    todo  = serializers.CharField(max_length=320)
    status  = serializers.CharField(max_length=32, default='To Do')
    
    class Meta:
        model = Todo 
        fields = ('__all__')
