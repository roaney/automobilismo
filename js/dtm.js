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
const dtm = [
    ['Red Bull Ring Race 1', new Date(2026, 3, 24)],
    ['Red Bull Ring Race 2', new Date(2026, 3, 25)],
    ['Zandvoort Race 1', new Date(2026, 4, 23)],
    ['Zandvoort Race 2', new Date(2026, 4, 24)],
    ['Lausitzring Race 1', new Date(2026, 5, 20)],
    ['Lausitzring Race 2', new Date(2026, 5, 21)],
    ['Norisring Race 1', new Date(2026, 6, 3)],
    ['Norisring Race 2', new Date(2026, 6, 4)],
    ['Oschersleben Race 1', new Date(2026, 6, 24)],
    ['Oschersleben Race 2', new Date(2026, 6, 25)],
    ['Nürburgring Race 1', new Date(2026, 7, 15)],
    ['Nürburgring Race 2', new Date(2026, 7, 16)],
    ['Sachsenring Race 1', new Date(2026, 8, 11)],
    ['Sachsenring Race 2', new Date(2026, 8, 12)],
    ['Hockenheimring Race 1', new Date(2026, 9, 9)],
    ['Hockenheimring Race 2', new Date(2026, 9, 10)]
]
const agenda = document.getElementById('agenda')
const hoje = new Date()
dtm.forEach(([local, data]) => {
    if (hoje > data.setHours(23)) {
        agenda.innerHTML += `<i class="fa-solid fa-flag-checkered"></i> ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    } else {
        agenda.innerHTML += `${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    }
})