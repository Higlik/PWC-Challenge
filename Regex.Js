const btn = document.querySelector("#send")

    btn.addEventListener("click", function (e) {
        e.preventDefault()
        
        //captar o endereço
        const addressColector = document.querySelector("#addressColector");
        //atribuir o endereço em value
        const value = addressColector.value;
        
        //Armazena o endereço
        var container = []; 

        //Realiza a busca da regex
        exp = /^([a-zçíãáõé\s]+) ([\d\sa-z]*)$/i
        //Realiza a função do regex
        result = exp.exec(value);
        //Apaga o primeiro indice do conteiner


        //Valida se a pesquisa atende o endereços do desafio 1 e 2    
        if(exp.test(value) == true) {
            container.push(result);
            container.shift();
        }else if (exp.test(value) == false) {
            exp = /^([\d\s]+) ([a-zçíãáõé\s]+)$/i;
            result = exp.exec(value);
            if(exp.test(value) == true){
                container.push(result);
            }

    

        //Printa na text area o resultado da regex
            var address = "Endereço: "+container;
            document.getElementById("showAdrress").innerHTML = address; 

            //finalizando versão 2

    }});