function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    //var horas = 9
    msg.innerHTML = `Agora são ${horas} horas`
    if(horas >=0 && horas < 12){
        //BOM DIA
        img.src = "fotomanha.png"
        document.body.style.background = '#e7d3af'

    }else if (horas >=12 && horas < 18){
        //BOA TARDE
        img.src = "fototarde.png"
        document.body.style.background = '#e58e51'

    }else{
        //BOA NOITE
        img.src = "fotonoite.png"
        document.body.style.background = '#7b639d'

    }
}
