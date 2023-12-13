function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById ('txtano')
    var res = window.document.querySelector('div#res')
    /* ESSE CÓDIGO É IGUAL À 
    var res = window.document.getElementById('res')*/
    if(fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Check the data again !')
        fano.value = '';}
        else{
            var fsex = window.document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            /*res.innerHTML = `Idade calculada: ${idade}`*/
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if(fsex[0].checked) {
                genero = 'Man'
            if (idade>=0 && idade<10){
                img.setAttribute('src','foto-babym.png') }
            //criança
            else if(idade<25){
                img.setAttribute('src','foto-youngm.png') }
            //jovem
            else if(idade<50){
                img.setAttribute('src','foto-adultm.png') }
            //adulto
            else{ img.setAttribute('src','foto-oldm.png') }
            //velhot 
        }

        else if(fsex[1].checked) {
            genero = 'Woman'
            if (idade>=0 && idade<10){
                img.setAttribute('src','foto-babyg.png')}
            //criança
            else if(idade<25){
                img.setAttribute('src','foto-youngg.png')}
            //jovem
            else if(idade<50){
                img.setAttribute('src','foto-adultg.png')}
            //adulto
            else{
                img.setAttribute('src','foto-oldg.png')}
            //velhot
        }
            
            res.innerHTML = `We detected a ${idade} year-old ${genero} .`
            res.appendChild(img)
            fano.value = '';

        }
    
}
