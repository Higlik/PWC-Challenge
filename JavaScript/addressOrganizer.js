const btn = document.querySelector("#send")

    btn.addEventListener("click", function (e) {
        e.preventDefault()
        
        //captura o endereço digitado
        const addressColector = document.querySelector("#addressColector");
        
        //atribuir o endereço em value
        var value = addressColector.value;
        
        //executa a troca da vírgula
        var replacement = /,/g;
        
        //Armazena o endereço
        var container = [];
        
        //Remove a(s) vírgula(s) por espaço em branco
        value = value.replace(replacement,"");

        //regex para filtrar o se não há erro
        exp = /^(\s*|[\d\s]*)$/i;

        //Realiza a função do regex e atribui em result
        result = exp.exec(value);
        

        //validação para erro de endereço
        if(exp.test(value) == true) {
            container.push("Endereço digitado errado");

        //validação para ruas compostas com números
        }else if(exp.test(value) == false){
            exp = /^([a-zçíãáõé]+\s\d+\w?)+? ([a-z][\w+\s]+)$/i;
            result = exp.exec(value);
            if(exp.test(value) == true){
                container.push(result);
                result.shift();
            }else{
                //validação para endereços que iniciam com números
                if(exp.test(value) == false){
                    exp = /^(\d+[a-zçíãáõé]?\s+)([a-zçíãáõé\s]+)$/i
                    result = exp.exec(value);
                    if(exp.test(value) == true){
                        container.push(result[2]);
                        container.push(result[1]);
                        result.shift();
                    }else{
                        //validação para endereços simples e com números compostos de letras
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
            //Caso ocorra um erro não esperado
            container.push("Endereço digitado errado");
        }

        //Printa na text area o resultado da regex
            var address =  "Endereço: "+ container;
            document.getElementById("showAdrress").innerHTML = address; 
    });