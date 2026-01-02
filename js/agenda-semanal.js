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
const f1 = [
    ['Fórmula 1', 'Austrália', new Date(2026, 0, 4)],
    ['Fórmula 1', 'China', new Date(2026, 0, 11)],
    ['Fórmula 1', 'Japão', '29 de março'],
    ['Fórmula 1', 'Barein', '12 de abril'],
    ['Fórmula 1', 'Arábia Saudita', '19 de abril']
]
const nascar = [
    ['Nascar', 'Bowman Gray', new Date(2026, 0, 4)],
    ['Nascar', 'Daytona Duels', new Date(2026, 0, 11)],
    ['Nascar', 'Daytona 500', '15 de fevereiro'],
    ['Nascar', 'Atlanta', '22 de fevereiro'],
    ['Nascar', 'COTA', '1 de março']
]
function filtroSemanal (categoria) {
    const hoje = new Date()
    let diaDaSemana = hoje.getDay()
    if (diaDaSemana == 0) {
        diaDaSemana = 7
    }
    const segunda = new Date()
    segunda.setDate(hoje.getDate() - (diaDaSemana - 1))
    const domingo = new Date()
    domingo.setDate(hoje.getDate() + (7 - diaDaSemana))
    const agendaHTML = document.getElementById('agenda-semanal')
    const categoriaFiltrada = categoria.filter(([nome, local, data]) => {
        return data >= segunda && data <= domingo
    })
    categoriaFiltrada.forEach(([nome, local, data]) => {
        agendaHTML.innerHTML += `${nome} - ${local} - ${String(data.getDate()).padStart(2, '0')} / ${String(data.getMonth()+1).padStart(2, '0')}<br>`
    })
}
const todasCategorias = [f1, nascar]
todasCategorias.forEach(elemento => filtroSemanal(elemento))
