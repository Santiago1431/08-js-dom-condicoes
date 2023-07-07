function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Opa! algo deu errado, Insira os dados CORRETAMENTE')

    }else {
        window.alert ('ok')
    }
}