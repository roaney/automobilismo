const statusCarro = {
    pneus: "Médios",
    combustivel: "40%",
    temperatura: "95°C"
};
const alertas = Object.entries(statusCarro).filter(([chave, valor]) => {
    return valor.includes("%") || valor.includes("°C");
});
console.log(alertas)