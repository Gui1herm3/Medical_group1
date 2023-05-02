
 
let numTentativas = 0;


    function fazerLogin() {
        window.alert (numTentativas); 
        var email;
        var senha;
        var i = 0;
        var usuarios = ['a', 'b', 'c'];
        var senhas = ['a', 'b', 'c'];


        do {

            if (email == usuarios[0] && senha == senhas[0]) {
                
                    window.alert("ok");
                    window.location.href = "http://google.com";

//teste variavel


//fim do teste


                
            }
            else {
                i++;
                window.alert(i);






            }
        } while (i > 0 && i < 5);
        numTentativas ++;
        if (numTentativas >= 4) {
            alert("Você excedeu o número máximo de tentativas de login.");

        }
    }




