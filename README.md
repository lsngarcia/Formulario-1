É um formulário com validação de campos vazios, por enquantos apenas verifica se os cmapos estão vazio e não o formato(se é uma senha, e-mail,telefone...

Função enviar com um forEach para verificar todos os campos se tem algum igual apenas conteudo (=="") "igual a nada",
que caso seja verdadeiro retorna a função setError, retira o style .Right do input, adiciona para style .Error que tem deixa a borda do input vermelho,
e remove o style .escondido com o hidden que nas tag P para aparecer o texto "campo obrigatório"

Função validarInput é um if com o valor do input sendo !=="", "diferente de nada até mesmo variavel", quando começar a digitar a aciona,
chamando a função setRight que adiciona o style .Right que deixa as bordas do input verde, remove o style .Error, e adiciona o style .escondido

https://lsngarcia.github.io/Formulario-1/
