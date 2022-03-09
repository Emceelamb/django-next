from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    article_name = serializers.CharField(max_length=320)
    article_doi = serializers.CharField(max_length=40)
    
    class Meta:
        model = Article
        fields = ('__all__')