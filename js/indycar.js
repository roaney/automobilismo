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
const indycar = [
    ['St. Petersburg', new Date(2026, 2, 1)],
    ['Phoenix', new Date(2026, 2, 7)],
    ['Arlington', new Date(2026, 2, 15)],
    ['Alabama', new Date(2026, 2, 29)],
    ['Long Beach', new Date(2026, 3, 19)],
    ['Indianapolis Road Course', new Date(2026, 4, 9)],
    ['Indianapolis 500', new Date(2026, 4, 24)],
    ['Detroit', new Date(2026, 4, 31)],
    ['World Wide Technology', new Date(2026, 5, 7)],
    ['Road America', new Date(2026, 5, 21)],
    ['Mid-Ohio', new Date(2026, 6, 5)],
    ['Nashville', new Date(2026, 6, 19)],
    ['Portland', new Date(2026, 7, 9)],
    ['Markham - Canada', new Date(2026, 7, 16)],
    ['Milwaukee Mile Race 1', new Date(2026, 7, 29)],
    ['Milwaukee Mile Race 2', new Date(2026, 7, 30)],
    ['Laguna Seca', new Date(2026, 8, 6)]
]
const agenda = document.getElementById('agenda')
const hoje = new Date()
indycar.forEach(([local, data]) => {
    if (hoje > data.setHours(23)) {
        agenda.innerHTML += `<i class="fa-solid fa-flag-checkered"></i> ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    } else {
        agenda.innerHTML += `${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    }
})