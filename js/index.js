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


// let theStateOfThings = function () {
    let theStateOfThings = () => {

        let winH = document.documentElement.clientHeight
        let winW = document.documentElement.clientWidth
        let docH = document.documentElement.scrollHeight
        let docW = document.documentElement.scrollWidth
        let winY = window.scrollY
        let winX = window.scrollX
        let maxY = docH - winH
        let maxX = docW - winW
        let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
        let pctX = Math.round(winX / Math.max(maxX, 1) * 100)
    
    
        let infoForElement = ''	
    
        let checkOneSection = ($sec) => {
            let fromD = $sec.offsetTop
            let top = $sec.getBoundingClientRect().top
            let bottom = $sec.getBoundingClientRect().bottom
            
            let theId = $sec.getAttribute('id')
    
            if (top < winH && bottom > 0) {
                infoForElement += `<li>${theId}</li>`
            } else {
                infoForElement += `<li><a href="#${theId}">${theId}</a></li>`
            }
        }
    
        // Iterate through each matching eleemnt, call the checkOneSection function for each one
        document.querySelectorAll('.yeearClass').forEach(checkOneSection)
        
    
        $yearBar.innerHTML = `            

        <ol class="nav">${infoForElement}</ol>

         `;

    }
    
    // 1                       2     3
    window.addEventListener('load', theStateOfThings)
    window.addEventListener('scroll', theStateOfThings)
    window.addEventListener('resize', theStateOfThings)