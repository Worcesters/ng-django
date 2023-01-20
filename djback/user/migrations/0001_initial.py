# Generated by Django 4.1.4 on 2023-01-13 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('language', models.CharField(blank=True, max_length=26)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('firstname', models.CharField(max_length=20)),
                ('lastname', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=20)),
                ('language', models.ManyToManyField(to='user.language')),
            ],
        ),
    ]