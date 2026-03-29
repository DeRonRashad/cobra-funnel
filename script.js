const SUPABASE_URL = "https://vauuoukoxvrliaznvale.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nADEbSJ7tkdGAZ7CWW_0tA_t2bi3OB-";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById("leadForm");
const statusMessage = document.getElementById("statusMessage");
const submitButton = form.querySelector("button");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  statusMessage.textContent = "Submitting...";
  submitButton.disabled = true;

  const full_name = document.getElementById("full_name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const coverage_type = document.getElementById("coverage_type").value;

  const { error } = await supabaseClient
    .from("cobra_leads")
    .insert([
      {
        full_name,
        phone,
        email,
        coverage_type,
      },
    ]);

  if (error) {
    console.error("Supabase insert error:", error);
    statusMessage.textContent = "Something went wrong. Please try again.";
    submitButton.disabled = false;
    return;
  }

  statusMessage.textContent = "Success! Your request has been submitted.";
  form.reset();
  submitButton.disabled = false;
});