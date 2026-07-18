function showForm() {
  const form = document.getElementById("petitionForm");

  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

async function submitPetition() {
  const name = document.getElementById("name").value.trim();
  const district = document.getElementById("district").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const support = document.getElementById("support").checked;

  if (!name || !district) {
    alert("Please fill all required fields.");
    return;
  }

  if (!support) {
    alert("Please confirm your support.");
    return;
  }

  const { error } = await supabase
    .from("signatures")
    .insert([
      {
        name: name,
        district: district,
        mobile: mobile || null
      }
    ]);

  if (error) {
    console.error(error);
    alert(error.message);
    return;
  }

  window.location.href = "thankyou.html";
}