# Generated by Django 4.1.4 on 2024-02-07 20:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0004_rename_product_image_catalogue_product_image_1_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('category', models.CharField(max_length=25, primary_key=True, serialize=False)),
            ],
        ),
        migrations.AlterField(
            model_name='catalogue',
            name='category',
            field=models.OneToOneField(db_column='category', null=True, on_delete=django.db.models.deletion.SET_NULL, to='catalogue.categories'),
        ),
        migrations.AlterField(
            model_name='mastercatalogue',
            name='category',
            field=models.OneToOneField(db_column='category', null=True, on_delete=django.db.models.deletion.SET_NULL, to='catalogue.categories'),
        ),
    ]