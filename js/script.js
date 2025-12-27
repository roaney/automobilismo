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
regressiva(new Date(2026, 0, 24), 'txt-imsa')
regressiva(new Date(2026, 5, 13), 'txt-wec')
regressiva(new Date(2026, 2, 22), 'txt-motogp')
regressiva(new Date(2026, 5, 27), 'txt-gtw')
regressiva(new Date(2026, 10, 8), 'txt-f1')
regressiva(new Date(2026, 1, 15), 'txt-nascar')
regressiva(new Date(2026, 4, 24), 'txt-indy')
regressiva(new Date(2026, 4, 16), 'txt-adac')
const botao = document.getElementById('botao')
const menu = document.getElementById('menu')
botao.addEventListener('click', () => {
    if (menu.style.left == '0px') {
        menu.style.left = '-200px'
    } else {
        menu.style.left = '0px'
    }
})