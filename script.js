function informacoes() {
    var horas = window.document.getElementById('horario')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var horario = data.getHours()
    horas.innerHTML = `Agora são ${horario} horas`
    if (horario >= 0 && horario <12) { //BOM DIA
        img.innerHTML = "<img src='/imagens/amanhecer.jpg'>"
        document.body.style.background = 'rgb(69, 69, 181)'
    } else if (horario >= 12 && horario <18) { //BOA TARDE
        img.innerHTML = "<img src='/imagens/tarde.jpg'>"
        document.body.style.background = 'rgb(197, 148, 49)'
    } else { //BOA NOITE
        img.innerHTML = "<img src='/imagens/noite.jpg'>"
        document.body.style.background = 'rgb(61, 61, 61)'
    }
}