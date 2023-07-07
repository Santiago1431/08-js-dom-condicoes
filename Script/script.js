function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //dia
        img.src="Imagens/hora/FotoManha.jpg"
        document.body.style.background = '#c0a091'

    } else if (hora >= 12 && hora < 18){
        //tarde
        
        img.src="Imagens/hora/FotoTarde.jpg"
        document.body.style.background = '#b4c3ca'

    } else {
        //noite
        img.src = 'Imagens/hora/FotoNoite.jpg'
        document.body.style.background = '#001e41'

    }
}
