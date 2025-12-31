const statusCarro = {
    pneus: "Médios",
    combustivel: "40%",
    temperatura: "95°C"
}
const alertas = Object.values(statusCarro).filter(valor => {
    return valor.includes("%") || valor.includes("°C")
})
console.log(alertas)
