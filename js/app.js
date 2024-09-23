
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



document.getElementById("donate-kurigram").addEventListener("click", function(event){
  let donationAmount = getElementText("donation-kurigram-amount");
  const kurigramDonationInput = getElementValue("donate-kurigram-input");

  if (isNaN(kurigramDonationInput) || kurigramDonationInput < 0 || kurigramDonationInput > mainBalanceAmount){
    alert("Please enter a valid number.");
    return;
  }else{
    donationAmount += kurigramDonationInput;
    mainBalanceAmount -= kurigramDonationInput;
    document.getElementById("main-balance").innerText = mainBalanceAmount;
    document.getElementById("donation-kurigram-amount").innerText = donationAmount;

    // For history information
    const donationTitle = document.getElementById("kurigram-donation-title").innerText
    historyGenerator(kurigramDonationInput, donationTitle);
  }

});


