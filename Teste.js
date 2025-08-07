function testeDeInput (){
    const Inputtest = document.querySelector('#input')
    let senha = Inputtest.value
    if (senha == "Senhaforte123"){
        window.location.href = "outrapag.html"
    }else{
        alert("A senha está errada")
        window.location.href = "Index.html"

    }
    console.log(senha)
}
