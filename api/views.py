from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.

class TodoView(APIView):
    def post(self, request, id=None):
        serializer = TodoSerializer(data=request.data)

        if id:
            return Response({"status": "error", "data": "Method not allowed"}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None):
        if id:
            item = Todo.objects.get(id=id)
            serializer = TodoSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

        items = Todo.objects.all()
        serializer = TodoSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        
    def patch(self, request, id=None):
        item = Todo.objects.get(id=id)
        serializer = TodoSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})

    def delete(self, request, id=None):
        item = get_object_or_404(Todo, id=id)
        item.delete()
        return Response({"status": "success", "data": "Todo Deleted"})

    




