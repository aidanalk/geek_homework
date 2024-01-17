

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "Ok"
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = "NOT Ok"
        phoneResult.style.color = 'red'
    }
}


const tabContentBlocks = document.querySelectorAll('.tab_content_block')

const hideTabContent = () => {
    tabContentBlocks.forEach(tabContentBlock => {
        tabContentBlock.style.display = 'none'
    })
}



//converter

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element, targetElement, targetElement2, current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse((xhr.response))

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    break
                default:
                    break
            }
        }
    }
}
converter(som, usd, 'som')
converter(usd, som, 'usd')


//
// som.addEventListener('input', () => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', '../data/converter.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()
//
//     xhr.addEventListener('load', () => {
//         const data = JSON.parse (xhr.response)
//         usd.value = (som.value / data.usd).toFixed(2)
//     })
// })

const cityNameButton = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

cityNameButton.addEventListener('input', async (event) => {
    try{

        fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
        city.innerHTML = data.name ? data.name: 'none'
        temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273.15) + 'C' : '...'
    } catch (e) {
        
    }
})

const tabContents = document.querySelectorAll('.tab_content_block')

const hideTabContent = () => {
    tabContents.forEach((tabContent) => {
        tabContent.style.display = 'none'
    })
}