// Speak text
function speakText(id) {
  let text = document.getElementById(id).innerText;
  let msg = new SpeechSynthesisUtterance(text);
  msg.lang = localStorage.getItem("lang") || "en-US";
  speechSynthesis.speak(msg);
}

// Switch Language (English ↔ Hindi)
function toggleLanguage() {
  let current = localStorage.getItem("lang") || "en-US";
  let newLang = current === "hi-IN" ? "en-US" : "hi-IN";
  localStorage.setItem("lang", newLang);
  location.reload();
}
