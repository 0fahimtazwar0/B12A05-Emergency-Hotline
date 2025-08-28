// heart
const hearts = document.getElementsByClassName('fa-heart')
let heartCount = parseInt(document.getElementById('heart-count').innerText)

for (const singleHeart of hearts) {
    singleHeart.addEventListener('click', function () {
        heartCount++
        document.getElementById('heart-count').innerText = heartCount;
    })
}

// alert
const allCardTitles = document.getElementsByClassName('card-title')
const allCallNumbers = document.getElementsByClassName('call-number')
const allCallButtons = document.getElementsByClassName('call-btn')
let historyContainer = document.getElementById('history-container')

// coin cut
let coinCount = parseInt(document.getElementById('coin-count').innerText)


for (let i = 0; i < allCardTitles.length; i++) {
    const cardTitle = allCardTitles[i].innerText;
    const callNumber = allCallNumbers[i].innerText;
    const callBtn = allCallButtons[i]
    
    callBtn.addEventListener('click', function () {
        if (coinCount < 20) {
            alert('Insufficient Coins')
            return
        }
        alert(cardTitle + ' ' + callNumber)
        coinCount -= 20;
        document.getElementById('coin-count').innerText = coinCount;
        
        let dataDiv = document.createElement("div")
        dataDiv.innerHTML =
        `<div class="bg-[#FAFAFA] p-4 flex justify-between items-center rounded-lg">
        <div class="flex flex-col gap-1">
        <p class="bangla text-lg text-[#111]">${cardTitle}</p>
        <p class="text-lg text-[#5C5C5C]">${callNumber}</p>
        </div>
        <span class="text-lg text-[#111]">${new Date().toLocaleTimeString()}</span>
        </div>`
        
        historyContainer.appendChild(dataDiv)
    })
}