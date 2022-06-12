# Generated by Django 4.0.5 on 2022-06-05 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todo', models.CharField(max_length=320)),
                ('status', models.CharField(choices=[('TD', 'To Do'), ('IP', 'In Progress'), ('DN', 'Done')], default='TD', max_length=2)),
            ],
        ),
    ]