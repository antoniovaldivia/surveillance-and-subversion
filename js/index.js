let $bar = document.querySelector('.progress')
let $progressText = document.querySelector('.progressText')
let $h1 = document.getElementById('heading')
let year = document.getElementById('year').textContent
let $titleBar = document.querySelector('.titleBar')
let $yearBar = document.querySelector('.yearBar')
let title = document.querySelector('h1').textContent


window.addEventListener('scroll', event => {
let windowH = window.innerHeight
let documentH = document.documentElement.scrollHeight
let amtScrolled = window.scrollY
let ttlAvailable = documentH - windowH
let percent = amtScrolled / ttlAvailable

$bar.style.width = `${percent * 100}%`
$progressText.textContent = `${Math.round(percent*100)}%`

let h1Top = $h1.offsetTop
let h1Height = $h1.clientHeight
console.log(h1Top, h1Height, amtScrolled)
console.log(year)


if (amtScrolled > h1Top + h1Height) {
    console.log('H1 is off the top')
    $titleBar.classList.add(`show`)
    $yearBar.classList.add(`show`)
    $titleBar.innerHTML = `${title}`;
    $yearBar.innerHTML = `${year}`;

} else {
    $titleBar.classList.remove(`show`)
    $yearBar.classList.remove(`show`)
    $titleBar.innerHTML = ``;
}

})