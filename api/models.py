from django.db import models

# Create your models here.

class Article(models.Model):
    article_name = models.CharField(max_length=320)
    article_doi = models.CharField(max_length=40)

    def __str__(self):
        return self.article_name
