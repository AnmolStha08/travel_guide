from django.db import models

# Create your models here.
class Signup(models.Model):
    firstName = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    contact = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    email = models.EmailField(unique=True, null=False)
    password = models.CharField(max_length=100)
    
    def __str__(self):
        return self.first_name 


class UserProfile(models.Model):
    firstName = models.CharField(max_length=130)
    last_name = models.CharField(max_length=120)
    contact = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    email = models.EmailField(unique=True, null=False)
    password = models.CharField(max_length=100)
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)

class Profile(models.Model):
    user = models.OneToOneField(Signup, on_delete=models.CASCADE)

# class feedback(models.Model):
#     content = models.TextField(default="this is the default message")
#     annonuser = models.TextField(default="*user*")
#     created_at = models.TextField(default="0000-00-00")

#     def __str__(self):
#         return f"Feedback #{self.id} - {self.created_at}"

class feedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    feedback = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subject  # You can change this as per your requirement
