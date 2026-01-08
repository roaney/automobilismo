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
const wec = [
    ['Catar', new Date(2026, 2, 28)],
    ['Itália', new Date(2026, 3, 19)],
    ['Bélgica', new Date(2026, 4, 9)],
    ['França', new Date(2026, 5, 13)],
    ['Brasil', new Date(2026, 6, 12)],
    ['Estados Unidos', new Date(2026, 8, 6)],
    ['Japão', new Date(2026, 8, 27)],
    ['Bahrein', new Date(2026, 10, 7)]
]
const agenda = document.getElementById('agenda')
const hoje = new Date()
wec.forEach(([local, data]) => {
    if (hoje > data.setHours(23)) {
        agenda.innerHTML += `<i class="fa-solid fa-flag-checkered"></i> ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    } else {
        agenda.innerHTML += `${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    }
})