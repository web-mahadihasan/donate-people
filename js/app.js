
// get elements 
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const donationContainer = document.getElementById("donation-container");
const historyContainer = document.getElementById("history-container");

// Event listener add Donation and History button 
donationBtn.addEventListener("click", function(){
  // Remove active color
  historyBtn.classList.remove("bg-primary", "border-primary");
  historyBtn.classList.add("bg-white", "border", "border-border-bg");

  //  Add color
  donationBtn.classList.add("bg-primary", "border-primary");
  donationBtn.classList.remove("bg-white", "border", "border-border-bg");

  donationContainer.classList.remove("hidden");
  historyContainer.classList.add("hidden");
});

historyBtn.addEventListener("click", function(){
  // Remove active color
  donationBtn.classList.remove("bg-primary", "border-primary");
  donationBtn.classList.add("bg-white", "border", "border-border-bg");

  //  Add color
  historyBtn.classList.add("bg-primary", "border-primary");
  historyBtn.classList.remove("bg-white", "border", "border-border-bg");

  historyContainer.classList.remove("hidden");
  donationContainer.classList.add("hidden");
});

// Blogs button file change 
document.getElementById("blogs-btn").addEventListener("click", function(){
  window.location.href = ("blogs.html");
});


// Kurigram Donation 
document.getElementById("donate-kurigram").addEventListener("click", function(){
  const kurigramDonationInput = Number(document.getElementById("input-amount-kurigram").value);
  const donationTitle = document.getElementById("kurigram-donation-title").innerText

  if (isNaN(kurigramDonationInput) || kurigramDonationInput <= 0 || kurigramDonationInput > mainBalanceAmount){
    alert("Sorry!! You can't donate. Please check your input amount.");
    return;
  }else{
    amountCalculate("donation-kurigram-amount", kurigramDonationInput, donationTitle);
    document.getElementById("input-amount-kurigram").value = "";

  }

});


// Feni Donation 

document.getElementById("feni-donation-btn").addEventListener("click", function(){
  const feniDonationInput = Number(document.getElementById("input-amount-feni").value);
  const donationTitle = document.getElementById("feni-donation-title").innerText;

  if (isNaN(feniDonationInput) || feniDonationInput <= 0 || feniDonationInput > mainBalanceAmount){
    alert("Sorry!! You can't donate. Please check your input amount.");
    return;
  }else{
    amountCalculate("feni-donation-amount", feniDonationInput, donationTitle);
    document.getElementById("input-amount-feni").value = "";

  }

});

// Quota Movement Donation 

document.getElementById("quota-donation-btn").addEventListener("click", function(){
  const quotaDonationInput = Number(document.getElementById("input-amount-quota").value);
  const donationTitle = document.getElementById("quota-donation-title").innerText;

  if (isNaN(quotaDonationInput) || quotaDonationInput <= 0 || quotaDonationInput > mainBalanceAmount){
    alert("Sorry!! You can't donate. Please check your input amount. Please enter a valid number.");
    return;
  }else{
    amountCalculate("quota-donation-amount", quotaDonationInput, donationTitle);
    document.getElementById("input-amount-quota").value = "";

  }

});

// Winter donation 

document.getElementById("winter-donation-btn").addEventListener("click", function(){
  const winterDonationInput = Number(document.getElementById("input-amount-winter").value);
  const donationTitle = document.getElementById("winter-donation-title").innerText;

  if (isNaN(winterDonationInput) || winterDonationInput <= 0 || winterDonationInput > mainBalanceAmount){
    alert("Sorry!! You can't donate. Please check your input amount. Please enter a valid number.");
    return;
  }else{
    amountCalculate("winter-donation-amount", winterDonationInput, donationTitle);
    document.getElementById("input-amount-winter").value = "";

  }
});

