const SUPABASE_URL = "https://vauuoukoxvrliaznvale.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_nADEbSJ7tkdGAZ7CWW_0tA_t2bi3OB-";

const form = document.getElementById("leadForm");
const statusMessage = document.getElementById("statusMessage");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  statusMessage.textContent = "Submitting...";
  submitButton.disabled = true;

  const data = {
    full_name: document.getElementById("full_name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    coverage_type: document.getElementById("coverage_type").value,
    urgency: document.getElementById("urgency").value,
    current_status: document.getElementById("current_status").value,
    budget: document.getElementById("budget").value || null,
  };

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/cobra_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase error:", errorText);
      statusMessage.textContent = "Something went wrong. Please try again.";
      return;
    }

    statusMessage.textContent = "Success! Your request has been submitted.";
    form.reset();
  } catch (error) {
    console.error("Request failed:", error);
    statusMessage.textContent = "Network error. Please try again.";
  } finally {
    submitButton.disabled = false;
  }
});