document.getElementById("leadForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    full_name: document.getElementById("full_name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    coverage_type: document.getElementById("coverage_type").value,
    urgency: document.getElementById("urgency").value,
    current_status: document.getElementById("current_status").value,
    budget: document.getElementById("budget").value,
  };

  const response = await fetch("YOUR_SUPABASE_URL/rest/v1/cobra_leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": "sb_publishable_nADEbSJ7tkdGAZ7CWW_0tA_t2bi3OB-",
      "Authorization": "sb_publishable_nADEbSJ7tkdGAZ7CWW_0tA_t2bi3OB-"
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Thank you! A licensed agent will contact you shortly.");
  } else {
    alert("Something went wrong. Please try again.");
  }
});