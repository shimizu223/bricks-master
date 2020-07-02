from django.conf.urls import url
from . import views



app_name = 'ppapp'

urlpatterns = [
    url(r'^$', views.account_login, name='login'),
    url(r'^create/$', views.create_account, name='create_account'),
    url(r'^front/$', views.front, name='front'),
]