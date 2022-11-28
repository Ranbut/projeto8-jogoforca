# Descrição

Essa semana iremos fazer a nossa versão de um jogo muito conhecido: o jogo da forca! Nele, a pessoa jogadora tem que adivinhar uma palavra chutando letra por letra e, se cometer 6 erros, ela perde o jogo. Caso adivinhe a palavra antes disso, ela ganha. 

# Instruções Gerais
- [X]  Você deve criar o projeto com o `create-react-app` padrão, SEM usar nenhum template, e delete os arquivos que não serão utilizados
- [X]  Ao terminar o projeto, você obrigatoriamente deverá realizar o **deploy utilizando a Vercel**

# Requisitos
- Geral
    - [X]  Manipule o HTML usando somente React (sem usar o document nem bibliotecas como jQuery)
    - [X]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub
    - [X]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit
- Layout  
- Componentização
    - [X]  O seu jogo deverá ter 4 componentes:
        - [X]  App (chamará os demais componentes)
        - [X]  Jogo (imagem da forca, botão de iniciar, palavra do jogo)
        - [X]  Letras (conjunto de botões com as letras)
        - [X]  Chute (input e botão de chute)
- Pré-jogo
    - [X]  Crie um arquivo chamado `palavras.js` e coloque ele dentro da pasta `src` (o nome e o local precisam ser esses!)
    - [X]  Dentro do arquivo, insira o array de palavras disponibilizado abaixo:
        - Esse array possui strings que serão as palavras que o jogador deverá adivinhar. Você deverá importar esse array no componente `App` para utilizá-lo.
        - Você não deve mudar o nome do array! Mas se quiser mudar o conteúdo para adicionar palavras, fique à vontade 😄
    - [X]  Os botões de letras devem ser mapeados através de um array do alfabeto
        - Array do alfabeto
    - [X]  Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados
- Ao apertar “escolher palavra”
    - [X]  Input e letras passam a ficar habilitadas
    - [X]  A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada
    - [X]  Você deve sortear uma das palavras do array que está no arquivo `palavras.js` para o usuário tentar adivinhar
    - [X]  Aparece a palavra a ser adivinhada na tela, com um underline ( `_` ) para cada letra que a palavra possui
- Ao pressionar uma letra
    - [X]  O botão de uma letra já clicada deve ficar desabilitado
    - [X]  Se a palavra escolhida no jogo tiver a letra que o usuário apertou:
        - [X]  O underline da posição correspondente à letra deve ser substituído pela letra em si
        - [X]  As palavras disponibilizadas não possuem caracteres especiais, então não precisa se preocupar com isso!
    - [X]  Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou:
        - [X]  Sua contagem de erros deve aumentar
        - [X]  A imagem na forca deve mudar (forca0 > forca1 > forca2… e assim sucessivamente)
- Input de chute
    - [X]  Caso o usuário deseje, ele pode chutar a palavra inteira no input
    - [X]  Ao fazer isso, se acertar a palavra, ele ganha imediatamente
    - [X]  Mas, se errar, ele perde imediatamente, independente da contagem anterior de erros. A imagem que deve aparecer nesse momento é a do bonequinho enforcado (forca6)
- Fim de jogo
    - [X]  Botões de letras e input de chute devem ser desabilitados
    - [X]  Caso o usuário ganhe:
        - [X]  Quando o usuário ganha, a palavra completa fica em **verde** e os botões e input voltam a ficar desabilitados
        - [X]  Para continuar a jogar, o usuário deve apertar o botão “Escolher Palavra”, e o jogo será reiniciado do zero
    - [X]  Caso o usuário perca:
        - [X]  A imagem final que deve aparecer é a do boneco enforcado (forca6)
        - [X]  A palavra deve ser revelada, mas em **vermelho**
# Bônus
- Reiniciar o jogo
    - [X] A qualquer momento, o usuário pode reiniciar o jogo pressionando o botão “escolher palavra”
    - Uma nova palavra é sorteada
    - O jogo deve voltar ao estado inicial (0 erros, imagem inicial da forca, palavra apenas com risquinhos, input limpo, todos os botões de letras habilitados)
- Faça a estilização do projeto utilizando `styled-components`
    - Não esqueça de instalar a biblioteca com o comando `npm install styled-components`
- Considerar caracteres especiais
    - [X]  Quando o usuário pressionar uma letra sem acento (ex: a) e, na palavra, houver a mesma letra mas com acento (ex: à, á, â, ã), ela deve ser considerada como certo
    - [X]  Além dos acentos, cosidere também que c e ç são equivalentes
