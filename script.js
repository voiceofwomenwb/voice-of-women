function showForm() {
  const form = document.getElementById("petitionForm");

  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

async function submitPetition() {
alert("Submit button is working");
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
alert("Trying to save to database...");
const { data, error } = await supabase
  
    .from("signatures")
    .insert([
  {
    name: name,
    district: district,
    mobile: mobile || null
  }
])
.select();
console.log(error);
alert(JSON.stringify(error));
 if (error) {
  alert("ERROR: " + JSON.stringify(error));
  return;
}

alert("Saved successfully!");
window.location.href = "thankyou.html";

}