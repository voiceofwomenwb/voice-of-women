function showForm() {
  const form = document.getElementById("petitionForm");

  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function submitPetition() {
  const name = document.getElementById("name").value;
  const district = document.getElementById("district").value;
  const support = document.getElementById("support").checked;

  if (!name || !district) {
    alert("Please fill all required fields.");
    return;
  }

  if (!support) {
    alert("Please confirm your support.");
    return;
  }

  window.location.href = "thankyou.html";
}