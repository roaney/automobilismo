function regressiva(diaEvento, idElemento) {
    const display = document.getElementById(idElemento)
    const intervalo = setInterval(() => {
        const dataAtual = new Date()
        const diferenca = diaEvento - dataAtual
        const dias = Math.floor(diferenca / 86400000)
        display.textContent = `Faltam ${dias} dias!`
    }, 1000)
}
regressiva(new Date(2026, 0, 24), 'txt-imsa')
