const display = document.getElementById('txt-imsa')
const dataAtual = new Date()
const dataAlvo = new Date(2026, 0, 24)
const diferenca = dataAlvo - dataAtual
const dias = Math.floor(diferenca / 86400000)
display.textContent = `Faltam ${dias} dias`
