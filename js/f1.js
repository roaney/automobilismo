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
const formula1 = [
    ['Austrália', new Date(2026, 0, 7)],
    ['Austrália', new Date(2026, 2, 8)],
    ['China', new Date(2026, 2, 15)],
    ['Japão', new Date(2026, 2, 29)],
    ['Bahrein', new Date(2026, 3, 12)],
    ['Arabia-Saudita', new Date(2026, 3, 19)],
    ['Miami', new Date(2026, 4, 3)],
    ['Canadá', new Date(2026, 4, 24)],
    ['Mônaco', new Date(2026, 5, 7)],
    ['Espanha', new Date(2026, 5, 14)],
    ['Austria', new Date(2026, 5, 28)],
    ['Grã-Bretanha', new Date(2026, 6, 5)],
    ['Bélgica', new Date(2026, 6, 19)],
    ['Hungria', new Date(2026, 6, 26)],
    ['Holanda', new Date(2026, 7, 23)],
    ['Itália', new Date(2026, 8, 6)],
    ['Madrid', new Date(2026, 8, 13)],
    ['Azerbaijão', new Date(2026, 8, 26)],
    ['Cingapura', new Date(2026, 9, 11)],
    ['Estados Unidos', new Date(2026, 9, 25)],
    ['México', new Date(2026, 10, 1)],
    ['Brasil', new Date(2026, 10, 8)],
    ['Las Vegas', new Date(2026, 10, 21)],
    ['Catar', new Date(2026, 10, 29)],
    ['Abu Dhabi', new Date(2026, 11, 6)]
]
const agenda = document.getElementById('agenda')
const hoje = new Date()
formula1.forEach(([local, data]) => {
    if (hoje > data.setHours(23)) {
        agenda.innerHTML += `<i class="fa-solid fa-flag-checkered"></i> ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    } else {
        agenda.innerHTML += `${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    }
})