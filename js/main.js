document.addEventListener("DOMContentLoaded", function() {
    // Define the language toggle links
    const switchToArabic = document.getElementById("switch-to-ar");
    const switchToEnglish = document.getElementById("switch-to-en");
  
    // Function to switch to Arabic
    function switchToArabicText() {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
  
      document.querySelectorAll("[data-ar]").forEach((element) => {
        element.textContent = element.getAttribute("data-ar");
      });
  

    }
  
    // Function to switch to English
    function switchToEnglishText() {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
  
      document.querySelectorAll("[data-en]").forEach((element) => {
        element.textContent = element.getAttribute("data-en");
      });
  
      // Update the active language link style
      switchToArabic.classList.remove("fw-bold");
      switchToEnglish.classList.add("fw-bold");
    }
  
    // Event listeners for the language toggle links
    switchToArabic.addEventListener("click", (event) => {
      event.preventDefault();
      switchToArabicText();
    });
  
    switchToEnglish.addEventListener("click", (event) => {
      event.preventDefault();
      switchToEnglishText();
    });
  
    // Optional: Load default language based on the current HTML language attribute
    const currentLang = document.documentElement.getAttribute("lang");
    if (currentLang === "ar") {
      switchToArabicText();
    } else {
      switchToEnglishText();
    }
 
  
  });
  
  document.getElementById('switch-to-en').addEventListener('click', function () {
    document.querySelector('.intro').classList.add('ltr'); // Add class for English
    document.querySelector('.intro').classList.remove('rtl'); // Remove Arabic class if needed
});

document.getElementById('switch-to-ar').addEventListener('click', function () {
    document.querySelector('.intro').classList.add('rtl'); // Add class for Arabic
    document.querySelector('.intro').classList.remove('ltr'); // Remove English class if needed
});
  