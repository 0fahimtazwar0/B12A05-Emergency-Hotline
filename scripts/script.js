// heart
const hearts = document.getElementsByClassName('fa-heart')
let heartCount = parseInt(document.getElementById('heart-count').innerText)

for (const singleHeart of hearts) {
    singleHeart.addEventListener('click', function () {
        heartCount++
        document.getElementById('heart-count').innerText = heartCount;
    })
}
// copy btn
const allCopyBtn = document.getElementsByClassName('copy-btn')
let copyCount = parseInt(document.getElementById('copy-count').innerText)

for (let i = 0; i < allCopyBtn.length; i++) {
    allCopyBtn[i].addEventListener('click', function () {
        copyCount++
        document.getElementById('copy-count').innerText = copyCount;
        navigator.clipboard.writeText(document.getElementsByClassName('call-number')[i].innerText)
        alert('📋 ' + document.getElementsByClassName('call-number')[i].innerText + ' copied to clipboard!')
    })
}

// alert
const allCardTitles = document.getElementsByClassName('card-title')
const allCardTitlesEnglish = document.getElementsByClassName('card-title-english')
const allCallNumbers = document.getElementsByClassName('call-number')
const allCallButtons = document.getElementsByClassName('call-btn')
let historyContainer = document.getElementById('history-container')

// call btn and coin cut
let coinCount = parseInt(document.getElementById('coin-count').innerText)


for (let i = 0; i < allCardTitles.length; i++) {
    const cardTitle = allCardTitles[i].innerText;
    const cardTitleEnglish = allCardTitlesEnglish[i].innerText;
    const callNumber = allCallNumbers[i].innerText;
    const callBtn = allCallButtons[i]
    
    callBtn.addEventListener('click', function () {
        if (coinCount < 20) {
            alert('🚫 Oops! Not enough coins to continue.')
            return
        }
        alert('📞 Calling '+cardTitleEnglish + ' ' + callNumber +'...')
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

// clear history
document.getElementById('clear-history-btn').addEventListener('click', function () {
    historyContainer.innerHTML = ''
})



// mobile responsive
const homeSection = document.getElementById('info-cards')
const historySection = document.getElementById('history-section')
document.getElementById('home-btn').addEventListener('click', function () {
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('info-cards').style.display = 'grid'
})
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('info-cards').style.display = 'none';
    document.getElementById('history-section').style.display = 'flex'
    
})


// breakpoint to bring everything back
const breakpointNum = window.matchMedia("(min-width: 1024px)")

function breakpointChange() {
    if (breakpointNum.matches) {
        document.getElementById('info-cards').style.display = 'grid'
        document.getElementById('history-section').style.display = 'flex'
    }
}
breakpointChange();
breakpointNum.addEventListener("change", function () {
    breakpointChange();
});

// breakpoint to only show home as default
const breakpointNum2 = window.matchMedia("(max-width: 1024px)")

function breakpointChange2() {
    if (breakpointNum2.matches) {
        document.getElementById('info-cards').style.display = 'grid'
        document.getElementById('history-section').style.display = 'none'
    }
}
breakpointChange2();
breakpointNum2.addEventListener("change", function () {
    breakpointChange2();
});




