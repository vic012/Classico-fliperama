# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

O Classic Arcade Game Clone Project, foi desenvolvido utilizando HTML, CSS, API canvas e Javascript

1. EXECUTAR O JOGO.
O jogo é iniciado no navegador quando o arquilo: Index.html é executado, este chama um arquilo style.css (na pasta (css))
que traz um estilo básico e padrão para o layout onde o jogo será rodado, dessa mesma forma o Index.html executa três
outros arquivos javascripts dentro da pasta (js): engine.js, resources.js e app.js. 
Abra o index.html em seu navegador, em seguida, controle o player até a água - parte superior do cenário sem colidir com
nenhum inimigo, se o usuário chegar até a água sem ocasionar nenhuma colisão o jogo foi completado, porém se o player
chocar-se com algum inimigo o jogo volta ao seu local de origem e o jogo é automaticamente reiniciado.

2. COMO O JOGO É REPRODUZIDO.
A engine.js é responsável pelo loop do jogo, que consiste em uma atualização rápida de quadros, onde cada item
é redesenhado causando uma impressão de fluidez. ele traz toda a funcionalidade como redenrização e atualização e também
desenha o cenário inicial do jogo e chama as entidades criadas no arquivo app.js.

O resources.js é responsável por carregar as imagens que se encontram na pasta (images) e facilitar na redenrização
do jogo.

O app.js é responsável por acolher a criação dos entidades, Enemy que traz ao jogo os inimigos que cruzam a tela
e o Player que será controlado pelo usuário do Classic Arcade, também é de responsabilidade do app.js criar os
métodos de Update e Render que são chamados pela engine.js que funcionam para atualizar os inimigos e o jogar de posição
e de desenhar as imagens no cenário, ainda no app.js é que o método de reconhecimento de interação entre o jogador
com o jogo é implementado fazendo com que o player possa ser controlado pelo usuário a medida que preciona as teclas: 
"up", "Down", "Right" e "Left", quando o usuario interage com o jogo o player é movimentado e ai entra a real graça do jogo
se o player chegar até a água na parte superior do cenário sem colidir com nenhum inimigo ele vence o jogo e o player volta
ao seu ponto de origem, mas se caso o player colida com o inimigo a função de colisão entra em vigor e faz com que o 
usuário perca o jogo e player volte ao seu local de origem.

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
