# Generated by Django 4.2 on 2024-05-25 19:16

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sellercatalogue',
            name='hsn_code',
        ),
        migrations.AlterField(
            model_name='catalogue',
            name='csin',
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
    ]
