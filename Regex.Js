const btn = document.querySelector("#send")

    btn.addEventListener("click", function (e) {
        e.preventDefault()
        
        //captar o endereço
        const addressColector = document.querySelector("#addressColector");
        //atribuir o endereço em value
        var value = addressColector.value;

        console.log(value);
        //executa a troca da vírgula
        var replacement = /,/g;
        //Armazena o endereço
        var container = [];
        
        value = value.replace(replacement,"");

        console.log(value);
        //regex para filtrar o endereço
        exp = /^(\s*|[\d\s]*)$/i;

        
        //Realiza a função do regex
        result = exp.exec(value);
        //Apaga o primeiro indice do conteiner
        


        //Valida se a pesquisa atende endereço simples
        if(exp.test(value) == true) {
            container.push("Endereço digitado errado");
            console.log("Aqui 1");

        }else if(exp.test(value) == false){
            exp = /^([a-zçíãáõé]+\s\d+)+? ([a-z][\w+\s]+)$/i;
            result = exp.exec(value);
            if(exp.test(value) == true){
                container.push(result);
                result.shift();
                console.log("Aqui 1");
            }else{
                if(exp.test(value) == false){
                    exp = /^(\d+[a-zçíãáõé]?\s+)([a-zçíãáõé\s]+)$/i
                    result = exp.exec(value);
                    if(exp.test(value) == true){
                        container.push(result[2]);
                        container.push(result[1]);
                        result.shift();
                        console.log("Aqui 2");
                    }else{
                        exp = /^([a-zçíãáõé\s?]+) ([\d\sa-z]+)$/i;
                        result = exp.exec(value);
                        if(exp.test(value) == true){
                            container.push(result);
                            result.shift();
                            console.log("Aqui 3");
                        }

                    }                  
                }
            }
        }else{
            container.push("Endereço digitado errado");
        }

        //Printa na text area o resultado da regex
            var address =  "Endereço: "+container;
            document.getElementById("showAdrress").innerHTML = address; 


    });