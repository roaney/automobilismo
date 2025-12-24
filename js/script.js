function regressiva(diaEvento, idElemento) {
    const display = document.getElementById(idElemento)
    const intervalo = setInterval(() => {
        const dataAtual = new Date()
        const diferenca = diaEvento - dataAtual
        const dias = Math.ceil(diferenca / 86400000)
        if (dias == 1) {
            display.textContent = 'É amanhã!'
        } else if (diferenca <= 0 && diferenca >= -86400000) {
            display.textContent = 'É hoje!'
        } else if (diferenca < -86400000) {
            display.textContent = 'Evento encerrado!'
        } else {
            display.textContent = `Faltam ${dias} dias!`
        }
    }, 1000)
}
regressiva(new Date(2026, 0, 24), 'txt-imsa')
