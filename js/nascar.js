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
const nascar = [
    ['The Clash at Bowman Gray', new Date(2026, 1, 1)],
    ['Daytona Duels', new Date(2026, 1, 12)],
    ['Daytona 500', new Date(2026, 1, 15)],
    ['Atlanta', new Date(2026, 1, 22)],
    ['COTA', new Date(2026, 2, 1)],
    ['Phoenix', new Date(2026, 2, 8)],
    ['Las Vegas', new Date(2026, 2, 15)],
    ['Darlington', new Date(2026, 2, 22)],
    ['Martinsville', new Date(2026, 2, 29)],
    ['Bristol', new Date(2026, 3, 12)],
    ['Kansas', new Date(2026, 3, 19)],
    ['Talladega', new Date(2026, 3, 26)],
    ['Texas', new Date(2026, 4, 3)],
    ['Watkins-Glen', new Date(2026, 4, 10)],
    ['All-Star Dover', new Date(2026, 4, 17)],
    ['Charlotte', new Date(2026, 4, 24)],
    ['Nashville', new Date(2026, 4, 31)],
    ['Michigan', new Date(2026, 5, 7)],
    ['Pocono', new Date(2026, 5, 14)],
    ['San Diego', new Date(2026, 5, 21)],
    ['Sonoma', new Date(2026, 5, 28)],
    ['Chicagoland', new Date(2026, 6, 5)],
    ['Atlanta', new Date(2026, 6, 12)],
    ['North Wilkesboro', new Date(2026, 6, 19)],
    ['Indianapolis', new Date(2026, 6, 26)],
    ['Iowa', new Date(2026, 7, 9)],
    ['Richmond', new Date(2026, 7, 15)],
    ['New Hampshire', new Date(2026, 7, 23)],
    ['Daytona 400', new Date(2026, 7, 29)],
    ['Darlington', new Date(2026, 8, 6)],
    ['World Wide Technology', new Date(2026, 8, 13)],
    ['Bristol', new Date(2026, 8, 19)],
    ['Kansas', new Date(2026, 8, 27)],
    ['Las Vegas', new Date(2026, 9, 4)],
    ['Charlotte Roval', new Date(2026, 9, 11)],
    ['Phoenix', new Date(2026, 9, 18)],
    ['Talladega', new Date(2026, 9, 25)],
    ['Martinsville', new Date(2026, 10, 1)],
    ['Homestead-Miami', new Date(2026, 10, 8)]
]
const agenda = document.getElementById('agenda')
const hoje = new Date()
nascar.forEach(([local, data]) => {
    if (hoje > data.setHours(23)) {
        agenda.innerHTML += `<i class="fa-solid fa-flag-checkered"></i> ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    } else {
        agenda.innerHTML += `${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    }
})