// Features Common js
let mainBalanceAmount = Number(document.getElementById("main-balance").innerText);

// For History generator 
function historyGenerator(amount, title){
  const historyContainer = document.getElementById("history-container");
  const dateTime = new Date()

  const createHistory = document.createElement("div");
  createHistory.innerHTML += `
    <div class="p-8 shadow-outline rounded-xl space-y-2 mb-3">
        <h4 class="text-xl font-bold text-text-black">
          <span id="coin-logo" class="bg-[#f39e09] py-1 px-2 text-base rounded-full text-white"><i
              class="fa-solid fa-bangladeshi-taka-sign"></i></span>
          <span>${amount}</span>
          <span>Taka is Donation for</span>
          <span>${title}</span>
        </h4>
        <p class="text-secondary font-light">Date : <span>${dateTime}</span></p>
     </div>
  `;

  historyContainer.appendChild(createHistory);
}

// Amount Calculator 
function amountCalculate(totalDonation, inputAmount, title) {
  let totalDonationAmount = Number(document.getElementById(totalDonation).innerText);
  const donationInputAmount = Number(inputAmount.toFixed(2));

  const totalAmount = totalDonationAmount + donationInputAmount;
  mainBalanceAmount = mainBalanceAmount - donationInputAmount;
  document.getElementById(totalDonation).innerText = totalAmount;
  document.getElementById("main-balance").innerText = mainBalanceAmount.toFixed(2);

  // For modal 
  document.getElementById("show-modal-amount").innerText = donationInputAmount;
  document.getElementById("my_modal_1").classList.remove("hidden");
  my_modal_1.showModal();

  // For History 
  historyGenerator(donationInputAmount, title);
}
// Features Common js

const hh = document.getElementById("home-btn");
console.log(hh);

document.getElementById("home-btn").addEventListener("click", function(){
  // window.location.href = "index.html";
  console.log("select");
});
