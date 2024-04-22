document.getElementById("cost-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var budget = document.getElementById("budget").value;
	var people = document.getElementById("people").value;
	var date = document.getElementById("date").value;
	var location = document.getElementById("location").value;
	var destination = document.getElementById("destination").value;
	var transport = document.getElementById("transport").value;
	var transportCompany = document.getElementById("transport-company").value;
	var hotel = document.getElementById("hotel").value;
	var cost = 0;

	// Perform calculations here based on the input values

	document.getElementById("result").innerHTML = "Total cost: $" + cost;
});
function populateSecondSelect() {
    var transport = document.getElementById("transport");
    var company = document.getElementById("company");
    var selectedOption = transport.options[transport.selectedIndex].value;

    // Clear existing options
    company.innerHTML = "";

    // Add options based on the selected value
    if (selectedOption === "1") {
        var options = ["Option A", "Option B", "Option C"];
    } else if (selectedOption === "2") {
        var options = ["Option X", "Option Y", "Option Z"];
    } else if (selectedOption === "3") {
        var options = ["Option P", "Option Q", "Option R"];
    }

    // Add options to the second select box
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        company.add(option);
    }
}