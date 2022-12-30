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
        exp = /([A-Z]*[a-zçíãõé]+\s*) (\d*\s*[A-Z]*[a-z]*)/;

        //Realiza a função do regex
        result = exp.exec(value);
        //Apaga o primeiro indice do conteiner
        result.shift();


        //Valida se a pesquisa atende endereço simples
        if(exp.test(value) == true) {
            container.push(result);

        }





        //Printa na text area o resultado da regex
            var address = container;
            document.getElementById("showAdrress").innerHTML = address; 


    });