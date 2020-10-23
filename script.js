const $container = document.getElementById('container')

function addButtons() {
    $container.innerHTML =  `
    
    <button id='story-1'>Story 1</button>
    <button id='story-2'>Story 2</button>
    <button id='story-3'>Story 3</button>
    
    `
}

addButtons()

document.getElementById('finish-story').addEventListener('click', function () {
    $container.innerHTML = `
    <p>Story is finished!</p>
    <button id='new-story'>Create Another Story</button>
    `

    document.getElementById('new-story').addEventListener('click', function (){
        
        addButtons()
    })
})