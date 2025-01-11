function erro(id, message){
    document.getElementById(`${id}`).innerText = message
}

const inputs = document.querySelectorAll('input')

inputs.forEach((input, index) => {
    const errorId = `err${index + 1}`
    
    input.addEventListener('blur', function () {
        let mensagemErro = '';
        
        //erro de campo vazio
        if(input.value === ''){
            mensagemErro = 'este campo é obrigatório';
        }

        //erro de data
        if(index === inputs.length - 5){
            const data = new Date(input.value);
            const ano = data.getFullYear();
                
            if (ano < 1900 || ano > 2020) {
                mensagemErro = 'data de nascimento inválida';
            } 
        }
        
        //erro de senhas diferentes
        if(index === inputs.length - 1 && input.value !== inputs[index - 1].value){
            erro(`err${index}`, 'as senhas são diferentes');
            erro(`err${index + 1}`, 'as senhas são diferentes');
            return; // Evita que a mensagem seja apagada logo depois
        }
        
        erro(errorId, mensagemErro);
    })
})