const botaoAbrir = document.getElementById('abrir-menu')
const botaoFechar = document.getElementById('fechar-menu')
const menu = document.getElementById('menu')
const overlay = document.getElementById('overlay')
botaoAbrir.addEventListener('click', () => {
    menu.style.left = '0px'
    overlay.style.visibility = 'visible'
    overlay.style.opacity = '0.7'
})
botaoFechar.addEventListener('click', () => {
    menu.style.left = '-300px'
    overlay.style.visibility = 'hidden'
    overlay.style.opacity = '0'
})
const imsa = [
    ['24H Daytona', new Date(2026, 0, 24)],
    ['12H Sebring', new Date(2026, 2, 21)],
    ['100MIN Long Beach', new Date(2026, 3, 18)],
    ['2H 40MIN Laguna Seca', new Date(2026, 4, 3)],
    ['100MIN Detroit', new Date(2026, 4, 30)],
    ['6H Watkins Glen', new Date(2026, 5, 28)],
    ['2H 40MIN Bowmanville - Canada', new Date(2026, 6, 12)],
    ['6H Road America', new Date(2026, 7, 2)],
    ['2H 40MIN Virginia', new Date(2026, 7, 23)],
    ['2H 40MIN Indianapolis Road Course', new Date(2026, 8, 20)],
    ['10H Road Atlanta', new Date(2026, 9, 3)]
]
const agenda = document.getElementById('agenda')
const hoje = new Date()
imsa.forEach(([local, data]) => {
    if (hoje > data.setHours(23)) {
        agenda.innerHTML += `<i class="fa-solid fa-flag-checkered"></i> ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    } else {
        agenda.innerHTML += `${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    }
})