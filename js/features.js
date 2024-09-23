// Features Common js
function getElementValue(id) {
  const element = document.getElementById(id).value;
  const elementValue = Number(element);
  return elementValue;
}

function getElementText(id) {
  const elementText = document.getElementById(id).innerText;
  const elementTextValue = Number(elementText);
  return elementTextValue;
}


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
          <span>Taka is</span>
          <span>${title}</span>
        </h4>
        <p class="text-secondary font-light">Date : <span>${dateTime}</span></p>
     </div>
  `;

  historyContainer.appendChild(createHistory);
}
// Features Common js

