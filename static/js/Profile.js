function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var target = event.target.closest('.profile-header');
  if (target) {
      target.style.backgroundImage = 'url(' + document.getElementById(data).src + ')';
      localStorage.setItem(data + 'Src', document.getElementById(data).src);
  }
}

function previewBackground(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          document.getElementById('backgroundImageContainer').style.backgroundImage = "url('" + e.target.result + "')";
          localStorage.setItem('backgroundImageSrc', e.target.result);
          
          // Hide the upload option for background image
          document.getElementById('backgroundInputLabel').style.display = 'none';
          input.style.display = 'none';
      }

      reader.readAsDataURL(input.files[0]);
  }
}

function previewProfile(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          document.getElementById('uploadedProfileImage').src = e.target.result;
          localStorage.setItem('uploadedProfileImageSrc', e.target.result);
          
          // Hide the upload option for profile image
          document.getElementById('profileInputLabel').style.display = 'none';
          input.style.display = 'none';
      }

      reader.readAsDataURL(input.files[0]);
  }
}

function editDetails() {
  var detailsContainer = document.getElementById('detailsContainer');
  var fields = detailsContainer.getElementsByTagName('span');

  // Convert spans to input fields
  for (var i = 0; i < fields.length; i++) {
      var value = fields[i].textContent;
      var input = document.createElement('input');
      input.type = 'text';
      input.value = value;
      fields[i].parentNode.replaceChild(input, fields[i]);
  }

  // Change button text to "Save" and set onclick to saveDetails()
  var editButton = document.getElementById('editButton');
  editButton.textContent = 'Save';
  editButton.onclick = saveDetails;
}

function saveDetails() {
  var detailsContainer = document.getElementById('detailsContainer');
  var inputs = detailsContainer.getElementsByTagName('input');

  // Convert input fields back to spans
  for (var i = 0; i < inputs.length; i++) {
      var value = inputs[i].value;
      var span = document.createElement('span');
      span.textContent = value;
      inputs[i].parentNode.replaceChild(span, inputs[i]);
  }

  // Change button text back to "Edit" and set onclick to editDetails()
  var editButton = document.getElementById('editButton');
  editButton.textContent = 'Edit';
  editButton.onclick = editDetails;
}

window.onload = function() {
  // Assume userDetails is an object containing user details fetched from server-side
  var userDetails = {
      name: "John Doe",
      address: "123 Main Street",
      email: "john@example.com",
      contact: "123-456-7890"
  };

  // Display user details
  document.getElementById('nameField').textContent = userDetails.name;
  document.getElementById('addressField').textContent = userDetails.address;
  document.getElementById('emailField').textContent = userDetails.email;
  document.getElementById('contactField').textContent = userDetails.contact;

  var backgroundImageSrc = localStorage.getItem('backgroundImageSrc');
  var uploadedProfileImageSrc = localStorage.getItem('uploadedProfileImageSrc');
  
  if (backgroundImageSrc) {
      document.getElementById('backgroundImageContainer').style.backgroundImage = "url('" + backgroundImageSrc + "')";
      document.getElementById('backgroundInput').style.display = 'none';
  }
  
  if (uploadedProfileImageSrc) {
      document.getElementById('uploadedProfileImage').src = uploadedProfileImageSrc;
      document.getElementById('profileInput').style.display = 'none';
  }
};
