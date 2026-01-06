function regressiva(diaEvento, idElemento) {
    const display = document.getElementById(idElemento)
    const intervalo = setInterval(() => {
        const dataAtual = new Date()
        const diferenca = diaEvento - dataAtual
        const dias = Math.ceil(diferenca / 86400000)
        if (dias == 1) {
            display.textContent = 'É amanhã!'
        } else if (diferenca <= 0 && diferenca >= -86400000) {
            display.innerHTML = '<i class="fa-solid fa-flag fa-rotate-by fa-xs" style="color: #00ff00; --fa-rotate-angle: 20deg;"></i>É hoje!'
        } else if (diferenca < -86400000) {
            display.textContent = 'Evento encerrado!'
            clearInterval(intervalo)
        } else {
            display.textContent = `Faltam ${dias} dias!`
        }
    }, 1000)
}
const datas = [
    [new Date(2026, 0, 24), 'txt-imsa'],
    [new Date(2026, 5, 13), 'txt-wec'],
    [new Date(2026, 2, 22), 'txt-motogp'],
    [new Date(2026, 5, 27), 'txt-gtw'],
    [new Date(2026, 10, 8), 'txt-f1'],
    [new Date(2026, 1, 15), 'txt-nascar'],
    [new Date(2026, 4, 24), 'txt-indy'],
    [new Date(2026, 4, 16), 'txt-adac']
]
datas.forEach(([data, elementoHTML]) => regressiva(data, elementoHTML))
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