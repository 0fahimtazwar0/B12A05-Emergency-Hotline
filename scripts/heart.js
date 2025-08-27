const hearts = document.getElementsByClassName('fa-heart')
let heartCount = parseInt(document.getElementById('heart-count').innerText)

for (const singleHeart of hearts) {
    singleHeart.addEventListener('click', function () {
        heartCount++
        document.getElementById('heart-count').innerText = heartCount;
    })
}
