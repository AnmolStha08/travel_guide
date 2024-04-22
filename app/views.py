from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Signup
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from .models import UserProfile, feedback
from datetime import datetime
import os
from django.conf import settings

# Create your views here.
def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        first_name = request.POST.get('firstName')
        last_name = request.POST.get('lastName')
        contact = request.POST.get('contact')
        address = request.POST.get('address')
        email = request.POST.get('email')
        password1 = request.POST.get('password')
        password2 = request.POST.get('confirmPassword')
        print(username, password1, password2, email)
        if password1 == password2:
            print("Password1==password2", password1, "and", password2)
            password = password2
            user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
            user.save()
            # sendEmail(email, username, password)
            return redirect('/login')
        else:
            return HttpResponse("<hi>enter correct password</hi>")
    else:
        return render(request, 'signuppage.html')
# signup/views.py
    
    

def homepage(request):
    return render(request, 'homepage.html')


# def login(request):
#     if request.method == 'POST':
#         username = request.POST.get('email')
#         print(username)
#     return render(request, 'loginpage.html')

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to a success page.
            return redirect('home')
        else:
            # Return an 'invalid login' error message.
            return render(request, 'login.html', {'error_message': 'Invalid login'})
    else:
        return render(request, 'loginpage.html')

# def login(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             #redirect to a success page.
#             return redirect('home')
#         else:
#             #return an 'invalid login' error message.
#             return render(request, 'login.html', {'error_message': 'Invalid login'})
#     else:
#         return render(request, 'loginpage.html')


@login_required(login_url='/login')
def profile(request):
    # get current logged in user details   
    currUser = request.user
    currUid = currUser.id
    currUserDetails = User.objects.get(id=currUid)
    print(f"Current user : {currUser} and details : {currUserDetails}")
    print(currUserDetails)
    context = {'user': currUserDetails}
    return render(request, 'profile.html', context)



# @login_required
# def profile(request):
#     user = request.user  # Get the logged-in user
#     # Pass user data to the template
#     return render(request, 'profile.html', {'user': user})
# @login_required
# def profile(request):
#     user = request.user
#     context = {
#         'user': user
#     }
#     return render(request, 'profile.html', context)


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages

@login_required
def update_profile(request):
    if request.method == 'POST':
        user = request.user
        user.first_name = request.POST.get('first-name')
        user.last_name = request.POST.get('last-name')
        user.email = request.POST.get('email')

        # # Check if new password fields are filled and match
        # new_password = request.POST.get('new_password')
        # confirm_password = request.POST.get('confirm_password')
        # if new_password and confirm_password and new_password == confirm_password:
        #     user.set_password(new_password)
        #     messages.success(request, 'Password updated successfully!')

        user.save()
        messages.success(request, 'Profile updated successfully!')
        return redirect('profile')
    else:
        return redirect('profile')  # Redirect if someone tries to access via GET method

# @login_required
# def change_password(request):
#     if request.method == 'POST':
#         form = PasswordChangeForm(request.user, request.POST)
#         if form.is_valid():
#             user = form.save()
#             update_session_auth_hash(request, user)  # Important to maintain the session
#             return redirect('profile')  # Redirect to profile page
#     else:
#         form = PasswordChangeForm(request.user)
#     return render(request, 'change_password.html', {'form': form})

# def edit_profile(request):
#     if request.method == 'POST':
#         # Retrieve form data
#         first_name = request.POST.get('first_name')
#         last_name = request.POST.get('last_name')
#         contact = request.POST.get('contact')
#         address = request.POST.get('address')
#         email = request.POST.get('email')
#         password = request.POST.get('password')
        
#         # Update user's profile information
#         signup = Signup.objects.get(email=email)
#         signup.firstName = first_name
#         signup.last_name = last_name
#         signup.contact = contact
#         signup.address = address
#         signup.password = password
#         signup.save()
        
#         return redirect('profile')  # Redirect to profile page
#     else:
#         # Fetch existing user data
#         email = request.user.email  # Assuming you have user authentication
#         signup = Signup.objects.get(email=email)
#         return render(request, 'edit_profile.html', {'signup': signup})
    
def logout_view(request):
    logout(request)
    return redirect('/home')  # Redirect to the login page after logout
def map(request):
    return render(request, 'map.html')

def feedbacks(request):
    current_time = datetime.now()
    currentUser = request.user
    print(currentUser)
    if request.method == 'POST':
        Uname = request.POST.get('first-name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        feedbackmsg = request.POST.get('feedback')
        print(Uname, email, subject, feedbackmsg)
        feedbacks = feedback.objects.create(name=Uname, email=email, subject=subject, feedback=feedbackmsg  )
        feedbacks.save()
    allfeedbacks = feedback.objects.all()
    context = { "allfeedbacks": allfeedbacks }
    return render(request, 'feedback.html', context)

    # return render(request, 'feedback.html')
# def delete_profile(request,username):
#     queryset = user.objects.all(username=username)
#     queryset.delete()
#     return redirect('/home')
        