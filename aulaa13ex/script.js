    function ClicouOn() {
        var data = new Date()
        var ano = data.getFullYear()
        var nas = window.document.getElementById("nasc")
        var img = window.document.querySelector("div#img").value
        var text = window.document.querySelector("p#text")
        if (nas.value.length == 0 || Number(nas.value) > ano) {
            window.alert("[ERRO] Verifique os dados e tente novamente!")
        }  
        else {
            var fsex = window.document.getElementsByName("sex")
            var sendd = window.document.getElementById("send")
            var idade = ano - Number(nas.value)
            var gênero = ``
            var img = document.createElement("img")
            img.setAttribute("id", "foto")
    
            
            if (fsex[0].checked) {
                gênero = "Homem"
                res.innerHTML = `Detectamos um <strong>${gênero}</strong> com ${idade} anos.`
                if (idade >= 0 && idade < 10) {
                    // Criança
                    res.innerHTML = `Detectamos uma <strong>Criança</strong> ${gênero} com ${idade} anos.`
                    img.setAttribute("src", "imagens/foto-baby-m.png")
                } else if (idade < 21) {
                    // Jovem
                    res.innerHTML = `Detectamos um <strong>Jovem</strong> ${gênero} com ${idade} anos.`
                    img.setAttribute("src", "imagens/foto-jovem-m.png")
                } else if (idade < 50 && idade < 26) {
                    // Adulto
                    img.setAttribute("src", "imagens/foto-adulto-m2.png")
                } else if (idade > 26 && idade < 50 ) {
                    // Adulto
                    img.setAttribute("src", "imagens/foto-adulto-m.png")   
                }
                
                else {
                    // Idoso
                    res.innerHTML = `Detectamos um <strong>Idoso</strong> ${gênero} com ${idade} anos.`
                    img.setAttribute("src", "imagens/foto-idoso-m.png")
                }
            } else if (fsex[1].checked) {
                gênero = "Mulher"
                res.innerHTML = `Detectamos uma <strong>${gênero}</strong> com ${idade} anos.`
                if (idade >= 0 && idade < 10) {
                    // Criança
                    img.setAttribute("src", "imagens/foto-baby-f.png")
                    res.innerHTML = `Detectamos uma <strong>Criança</strong> ${gênero} com ${idade} anos.`
                } else if (idade < 21) {
                    // Jovem
                    res.innerHTML = `Detectamos uma <strong>Jovem</strong> ${gênero} com ${idade} anos.`
                    img.setAttribute("src", "imagens/foto-jovem-f.png")
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute("src", "imagens/foto-adulto-f.png")
                } else {
                    // Idoso
                    img.setAttribute("src", "imagens/foto-idoso-f.png")
                }
            } 
            res.style.textAlign = "center"
            res.appendChild(img)
        } if (idade > 105) {
            window.alert("Idade inválida!")
            res.innerHTML = ""
        }
        
    }







