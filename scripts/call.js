// alert
const allCardTitles = document.getElementsByClassName('card-title')
const allCallNumbers = document.getElementsByClassName('call-number')
const allCallButtons = document.getElementsByClassName('call-btn')

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
    })
}
