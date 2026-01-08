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
const motogp = [
    ['Tailândia', new Date(2026, 2, 1)],
    ['Brasil', new Date(2026, 2, 22)],
    ['Estados Unidos', new Date(2026, 2, 29)],
    ['Catar', new Date(2026, 3, 12)],
    ['Espanha', new Date(2026, 3, 26)],
    ['França', new Date(2026, 4, 10)],
    ['Catalunha', new Date(2026, 4, 17)],
    ['Itália', new Date(2026, 4, 31)],
    ['Hungria', new Date(2026, 5, 7)],
    ['República Tcheca', new Date(2026, 5, 21)],
    ['Holanda', new Date(2026, 5, 28)],
    ['Alemanha', new Date(2026, 6, 12)],
    ['Grã-Bretanha', new Date(2026, 7, 9)],
    ['Aragão', new Date(2026, 7, 30)],
    ['San Marino', new Date(2026, 8, 13)],
    ['Austria', new Date(2026, 8, 20)],
    ['Japão', new Date(2026, 9, 4)],
    ['Indonésia', new Date(2026, 9, 11)],
    ['Austrália', new Date(2026, 9, 25)],
    ['Malásia', new Date(2026, 10, 1)],
    ['Portugal', new Date(2026, 10, 15)],
    ['Valência', new Date(2026, 10, 22)]
]
const agenda = document.getElementById('agenda')
const hoje = new Date()
motogp.forEach(([local, data]) => {
    if (hoje > data.setHours(23)) {
        agenda.innerHTML += `<i class="fa-solid fa-flag-checkered"></i> ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    } else {
        agenda.innerHTML += `${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    }
})