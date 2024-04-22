"""
URL configuration for TravelGuide project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homepage, name='homepage'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.user_login, name='user_login'),
    path('profile/', views.profile, name='profile'),
    path('home/', views.homepage, name='home'),
    path('logout/', views.logout_view, name='logout_view'),
    path('map/', views.map, name='map'),
    path('feedback/', views.feedbacks, name='feedback'),
    path('update_profile/', views.update_profile, name='update_profile'),
    # path('delete_profile/', views.delete_profile, name='delete_profile'),

]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  
