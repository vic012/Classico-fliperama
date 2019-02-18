# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

O Classic Arcade Game Clone Project, foi desenvolvido utilizando HTML, CSS, API canvas e Javascript

1. EXECUTAR O JOGO.
O jogo � iniciado no navegador quando o arquilo: Index.html � executado, este chama um arquilo style.css (na pasta (css))
que traz um estilo b�sico e padr�o para o layout onde o jogo ser� rodado, dessa mesma forma o Index.html executa tr�s
outros arquivos javascripts dentro da pasta (js): engine.js, resources.js e app.js. 
Abra o index.html em seu navegador, em seguida, controle o player at� a �gua - parte superior do cen�rio sem colidir com
nenhum inimigo, se o usu�rio chegar at� a �gua sem ocasionar nenhuma colis�o o jogo foi completado, por�m se o player
chocar-se com algum inimigo o jogo volta ao seu local de origem e o jogo � automaticamente reiniciado.

2. COMO O JOGO � REPRODUZIDO.
A engine.js � respons�vel pelo loop do jogo, que consiste em uma atualiza��o r�pida de quadros, onde cada item
� redesenhado causando uma impress�o de fluidez. ele traz toda a funcionalidade como redenriza��o e atualiza��o e tamb�m
desenha o cen�rio inicial do jogo e chama as entidades criadas no arquivo app.js.

O resources.js � respons�vel por carregar as imagens que se encontram na pasta (images) e facilitar na redenriza��o
do jogo.

O app.js � respons�vel por acolher a cria��o dos entidades, Enemy que traz ao jogo os inimigos que cruzam a tela
e o Player que ser� controlado pelo usu�rio do Classic Arcade, tamb�m � de responsabilidade do app.js criar os
m�todos de Update e Render que s�o chamados pela engine.js que funcionam para atualizar os inimigos e o jogar de posi��o
e de desenhar as imagens no cen�rio, ainda no app.js � que o m�todo de reconhecimento de intera��o entre o jogador
com o jogo � implementado fazendo com que o player possa ser controlado pelo usu�rio a medida que preciona as teclas: 
"up", "Down", "Right" e "Left", quando o usuario interage com o jogo o player � movimentado e ai entra a real gra�a do jogo
se o player chegar at� a �gua na parte superior do cen�rio sem colidir com nenhum inimigo ele vence o jogo e o player volta
ao seu ponto de origem, mas se caso o player colida com o inimigo a fun��o de colis�o entra em vigor e faz com que o 
usu�rio perca o jogo e player volte ao seu local de origem.

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
