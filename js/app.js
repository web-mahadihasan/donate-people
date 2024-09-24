
// get elements 
let mainBalanceAmount = getElementText("main-balance");


// Button Color swap 

const donationHistory = document.querySelectorAll(".donation-history");
let lastBtnClick = null;

for(const donationHistoryBtn of donationHistory){
    donationHistoryBtn.addEventListener("click", function(event){
        if (lastBtnClick === null) {
            // remove active color 
            const removeActive = document.getElementById("donation-btn");
            removeActive.classList.remove("bg-primary");
            removeActive.classList.remove("border-primary")
            removeActive.classList.add("bg-white");
            removeActive.classList.add("border", "border-border-bg");

            // add color 
            donationHistoryBtn.classList.add("bg-primary");
            donationHistoryBtn.classList.add("border-primary");
            donationHistoryBtn.classList.remove("bg-white");
            donationHistoryBtn.classList.remove("border", "border-border-bg");
              
          lastBtnClick = donationHistoryBtn;
        } else {
          lastBtnClick.classList.remove("bg-primary");
          lastBtnClick.classList.remove("border-primary");
          lastBtnClick.classList.add("bg-white");
          lastBtnClick.classList.add("border", "border-border-bg");

          donationHistoryBtn.classList.add("bg-primary");
          donationHistoryBtn.classList.add("border-primary");
          donationHistoryBtn.classList.remove("bg-white");
          donationHistoryBtn.classList.remove("border", "border-border-bg");

          lastBtnClick = donationHistoryBtn;
        }
    })
}


// Event listener add Donation and History button 

document.getElementById("donation-btn").addEventListener("click", function(){
    const donationContainer = document.getElementById("donation-container");
    const historyContainer = document.getElementById("history-container");
        donationContainer.classList.remove("hidden")
        historyContainer.classList.add("hidden");
});
document.getElementById("history-btn").addEventListener("click", function () {
  const donationContainer = document.getElementById("donation-container");
  const historyContainer = document.getElementById("history-container");
        historyContainer.classList.remove("hidden");
        donationContainer.classList.add("hidden");
});

document.getElementById("blogs-btn").addEventListener("click", function(){
  window.location.href = ("blogs.html");
});


// Kurigram Donation 
document.getElementById("donate-kurigram").addEventListener("click", function(event){
  let donationAmount = getElementText("donation-kurigram-amount");
  const kurigramDonationInput = getElementValue("input-amount-kurigram");

  if (isNaN(kurigramDonationInput) || kurigramDonationInput <= 0 || kurigramDonationInput > mainBalanceAmount){
    alert("Please enter a valid number.");
    return;
  }else{
    donationAmount += kurigramDonationInput;
    mainBalanceAmount -= kurigramDonationInput;
    document.getElementById("main-balance").innerText = mainBalanceAmount;
    document.getElementById("donation-kurigram-amount").innerText = donationAmount;

    document.getElementById("show-modal-amount").innerText =
      kurigramDonationInput;
    document.getElementById("my_modal_1").classList.remove("hidden");
    my_modal_1.showModal();

    document.getElementById("input-amount-kurigram").value = "";
    // For history information
    const donationTitle = document.getElementById("kurigram-donation-title").innerText
    historyGenerator(kurigramDonationInput, donationTitle);
  }

});


// Feni Donation 

document.getElementById("feni-donation-btn").addEventListener("click", function(event){
  let donationAmount = getElementText("feni-donation-amount");
  const feniDonationInput = getElementValue("input-amount-feni");

  if (isNaN(feniDonationInput) || feniDonationInput <= 0 || feniDonationInput > mainBalanceAmount){
    alert("Please enter a valid number.");
    return;
  }else{
    donationAmount += feniDonationInput;
    mainBalanceAmount -= feniDonationInput;
    document.getElementById("main-balance").innerText = mainBalanceAmount;
    document.getElementById("feni-donation-amount").innerText = donationAmount;

    document.getElementById("show-modal-amount").innerText = feniDonationInput;
    document.getElementById("my_modal_1").classList.remove("hidden");
    my_modal_1.showModal();

    document.getElementById("input-amount-feni").value = "";
    // For history information
    const donationTitle = document.getElementById("feni-donation-title").innerText
    historyGenerator(feniDonationInput, donationTitle);
  }

});

// Quota Movement Donation 

document.getElementById("quota-donation-btn").addEventListener("click", function(event){
  let donationAmount = getElementText("quota-donation-amount");
  const quotaDonationInput = getElementValue("input-amount-quota");

  if (isNaN(quotaDonationInput) || quotaDonationInput <= 0 || quotaDonationInput > mainBalanceAmount){
    alert("Please enter a valid number.");
    return;
  }else{
    donationAmount += quotaDonationInput;
    mainBalanceAmount -= quotaDonationInput;
    document.getElementById("main-balance").innerText = mainBalanceAmount;
    document.getElementById("quota-donation-amount").innerText = donationAmount;

    document.getElementById("show-modal-amount").innerText = quotaDonationInput;
    document.getElementById("my_modal_1").classList.remove("hidden");
    my_modal_1.showModal();

    document.getElementById("input-amount-quota").value = "";
    // For history information
    const donationTitle = document.getElementById("quota-donation-title").innerText
    historyGenerator(quotaDonationInput, donationTitle);
  }

});

// Winter donation 

document.getElementById("winter-donation-btn").addEventListener("click", function(event){
  let donationAmount = getElementText("winter-donation-amount");
  const winterDonationInput = getElementValue("input-amount-winter");

  if (isNaN(winterDonationInput) || winterDonationInput <= 0 || winterDonationInput > mainBalanceAmount){
    alert("Please enter a valid number.");
    return;
  }else{
    donationAmount += winterDonationInput;
    mainBalanceAmount -= winterDonationInput;
    document.getElementById("main-balance").innerText = mainBalanceAmount;
    document.getElementById("winter-donation-amount").innerText = donationAmount;

    document.getElementById("show-modal-amount").innerText = winterDonationInput;
    document.getElementById("my_modal_1").classList.remove("hidden");
    my_modal_1.showModal();

    document.getElementById("input-amount-winter").value = "";
    // For history information
    const donationTitle = document.getElementById("winter-donation-title").innerText
    historyGenerator(winterDonationInput, donationTitle);
  }

});