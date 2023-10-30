    function ClicouOn() {
        var sendd = window.document.getElementById("send")
        var sex = window.document.getElementsByName("sex")
        var nas = window.document.getElementById("nasc")
        var num = Number(nas.value)
        var ano = new Date()
        var anos = ano.getFullYear()
        var sendd = anos - num
        window.alert(sendd) 
    }






