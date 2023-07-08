function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anotxt')
    var res = document.getElementById ('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('Opa! algo deu errado, Insira os dados CORRETAMENTE')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 5){
                //Bebe
                img.setAttribute ('src', 'Imagens/Idade/Bebehomem.jpg')
            } else if (idade < 14){
                //Criança
                img.setAttribute ('src', 'Imagens/Idade/criancah.jpg')
            } else if (idade < 15){
                //Jovem
                img.setAttribute ('src', 'Imagens/Idade/jovemh.jpg')
            } else if (idade < 60){
                //Adulto
                img.setAttribute ('src', 'Imagens/Idade/adultoh.jpg')
            } else {
                //Idoso
                img.setAttribute ('src', 'Imagens/Idade/idosoh.jpg')
            }

        } else {
            genero = 'Mulher'
            if(idade >=0 && idade < 5){
                //Bebe
                img.setAttribute ('src', 'Imagens/Idade/Bebemulher.jpg')
            } else if (idade < 14){
                //Criança
                img.setAttribute ('src', 'Imagens/Idade/criancam.jpg')
            } else if (idade < 15){
                //Jovem
                img.setAttribute ('src', 'Imagens/Idade/jovemm.jpg')
            } else if (idade < 60){
                //Adulto
                img.setAttribute ('src', 'Imagens/Idade/adultom.jpg')
            } else {
                //Idoso
                img.setAttribute ('src', 'Imagens/Idade/idosom.jpg')
            }
        }
        res.innerHTML = `${genero} de ${idade} anos detectado`
        res.appendChild (img)
    }
}