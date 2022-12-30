const btn = document.querySelector("#send")

    btn.addEventListener("click", function (e) {
        e.preventDefault()
        
        //captar o endereço
        const addressColector = document.querySelector("#addressColector");
        //atribuir o endereço em value
        const value = addressColector.value;
        

        //Armazena o endereço
        var container = [];


        //regex para filtrar o endereço
        exp = /^([a-zçíãáõé\s]+) ([\d\sa-z]+)$/i;

        //Realiza a função do regex
        result = exp.exec(value);
        //Apaga o primeiro indice do conteiner


        //Valida se a pesquisa atende endereço simples
        if(exp.test(value) == true) {
            container.push(result);
            result.shift();

        }else if(exp.test(value) == false){
            exp = /^(\d+\w?\s+)([a-zçíãáõé\s]+)$/i
            result = exp.exec(value);
            if(exp.test(value) == true)
            container.push(result[2]);
            container.push(result[1]);
        }





        //Printa na text area o resultado da regex
            var address = container;
            document.getElementById("showAdrress").innerHTML = address; 


    });