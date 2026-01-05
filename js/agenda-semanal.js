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
const calendario = {
    'Fórmula 1': [
        ['Austrália', new Date(2026, 0, 4)],
        ['China', new Date(2026, 0, 12)]
    ],
    'Nascar': [
        ['Bowman Gray', new Date(2026, 0, 19)],
        ['Daytona Duels', new Date(2026, 0, 25)]
    ]
}
const h1 = document.getElementById('h1-agenda')
const agenda = document.getElementById('agenda-semanal')
const hoje = new Date(2026, 0, 30)
let diaDaSemana = hoje.getDay()
if (diaDaSemana == 0) {
    diaDaSemana = 7
}
const segunda = new Date()
segunda.setDate(hoje.getDate() - (diaDaSemana - 1))
segunda.setHours(-1)
const domingo = new Date()
domingo.setDate(hoje.getDate() + (7 - diaDaSemana))
domingo.setHours(1)
const categorias = Object.entries(calendario)
categorias.forEach(([categoria, etapas]) => {
    const etapaDaSemana = etapas.filter(([local, data]) => {
        return data >= segunda && data <= domingo
    })
    etapaDaSemana.forEach(([local, data]) => {
        agenda.innerHTML += `${categoria} - ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
    })
})
if (agenda.textContent.trim() === '') {
    h1.innerHTML = '<i class="fa-regular fa-face-frown"></i> Que pena, não temos corridas nesse final de semana.'
} else {
    h1.innerHTML = 'As corridas desse final de semana'
}