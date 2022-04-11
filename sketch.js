var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)

  //prof: o comando para carregar imagens é sprite = loadImage("nomedaimagem.png")
  pathImg = loadImage("path.png");

  //loadAnimation (carregarAnimação) de corrida para o menino
 boy_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);

 //crie um sprite para a pista
 path = createSprite(200,200);

 //adicione uma imagem para a pista
 //prof: o comando para adicionar a imagem é sprite.addImage(variável)
 path.addImage(pathImg);

 //Faça com que a pista seja um fundo que se move dando a ela velocity Y.
 //prof: ficou faltando apenas o Y no final de velocity
 path.velocityY= 4;
 path.scale=1.2;

 //prof: criar o sprite do menino
 boy = createSprite(180,340,30,30);

 //adicione uma animação de corrida para ele
 boy.addAnimation("running", boy_running);
 boy.scale=0.08;
  
 //crie um limite à esquerda
 leftBoundary=createSprite(0,0,100,800);
 
 //crie um limite à direita
 rightBoundary=createSprite(410,0,100,800);

 //prof: deixar os limites invisíveis
 leftBoundary.visible = false;
 rightBoundary.visible = false;

}

function draw() {
  background(0);
  path.velocityY = 4;

  //prof: mover o menino com o mouse usando mouseX
  boy.x = World.mouseX 
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);

  //prof: colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary); 
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
