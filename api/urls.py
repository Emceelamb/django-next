from django.urls import path
from .views import ArticleView

urlpatterns = [
  path('articles/', ArticleView.as_view()),
  path('articles/<int:id>', ArticleView.as_view()),
]