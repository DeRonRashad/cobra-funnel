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

  const response = await fetch("https://vauuoukoxvrliaznvale.supabase.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": "sb_publishable_nADEbSJ7tkdGAZ7CWW_0tA_t2bi3OB-",
      "Authorization": "Bearer sb_publishable_nADEbSJ7tkdGAZ7CWW_0tA_t2bi3OB-",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Thank you! A licensed agent will contact you shortly.");
    document.getElementById("leadForm").reset();
  } else {
    const errorText = await response.text();
    console.error("Supabase error:", errorText);
    alert("Something went wrong. Check console.");
  }
});