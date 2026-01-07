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
    ],
    'Nascar': [
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
    ],
    'IMSA': [
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
    ],
    'IndyCar': [
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
    ],
    'MotoGP': [
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
    ],
    'WEC': [
        ['Catar', new Date(2026, 2, 28)],
        ['Itália', new Date(2026, 3, 19)],
        ['Bélgica', new Date(2026, 4, 9)],
        ['França', new Date(2026, 5, 13)],
        ['Brasil', new Date(2026, 6, 12)],
        ['Estados Unidos', new Date(2026, 8, 6)],
        ['Japão', new Date(2026, 8, 27)],
        ['Bahrein', new Date(2026, 10, 7)]
    ],
    'DTM': [
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
}
const h1 = document.getElementById('h1-agenda')
const agenda = document.getElementById('agenda-semanal')
const hoje = new Date()
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
const filtroSemanal = []
categorias.forEach(([categoria, etapas]) => {
    const etapaDaSemana = etapas.filter(([local, data]) => {
        return data >= segunda && data <= domingo
    })
    if (etapaDaSemana.length != 0) {
        etapaDaSemana.forEach(([local, data]) => {
            filtroSemanal.push([categoria, local, data])
        })
    }
})
filtroSemanal.sort((a, b) => a[2] - b[2])
filtroSemanal.forEach(([categoria, local, data]) => {
    agenda.innerHTML += `${categoria} - ${local} - ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}<br>`
})
if (agenda.textContent.trim() === '') {
    h1.innerHTML = '<i class="fa-regular fa-face-frown"></i> Que pena, não temos corridas nesse final de semana.'
} else {
    h1.innerHTML = 'As corridas desse final de semana'
}