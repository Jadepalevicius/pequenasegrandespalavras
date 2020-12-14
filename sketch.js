let lobo;
let ursos;
let cachorro;
let aumenta;
let dente;
let jade;
let crianca;
let letras;
let rato;
let macaco;
let nuvens;
var pontos =0;

function preload(){
  macaco = loadImage('imagens/macaco.jpg')
  nuvens = loadImage('imagens/nuvens.jpg')
  rato = loadImage('imagens/rato.jpg')
  crianca =loadImage('imagens/criancas.jpg')
  lobo = loadImage('imagens/lobo.jpg')
  ursos= loadImage('imagens/ursos.jpg')
  cachorro= loadImage('imagens/cachorro.jpg')
  aumenta=loadImage('imagens/aumenta.jpg')
  jade = loadImage('imagens/jade.jpg')
  letras = loadImage('imagens/letras.jpg')
  dente = loadImage('imagens/dente.jpg')
}
var tela=0;
var largura =300;
var altura = 70;
var xMenu =50;
var yMenu=50;
var yMenu1=150;
var yMenu2=250;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  textStyle(NORMAL);
  if(tela==0){
  background(aumenta);
    textAlign(CENTER);
    textSize(40);
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu && mouseY< yMenu+altura){
      stroke(200)
      fill(10)
      rect(xMenu,yMenu,largura,altura)
          if(mouseIsPressed){
          tela =1;
        }
    }
    
    fill(20)
    stroke(200)
    text("COMEÇAR",200,100)
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu1 && mouseY< yMenu1+altura){
      stroke(10)
      fill(10)
      rect(xMenu,yMenu1,largura,altura)
        if(mouseIsPressed){
          tela =2;
        }
        }
    fill(20)
    stroke(200)
    text("INFORMAÇÕES",200,200)
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu2 && mouseY< yMenu2+altura){
      stroke(200)
      fill(10)
      rect(xMenu,yMenu2,largura,altura)
        if(mouseIsPressed){
          tela =3;
        }
    }
    
    stroke(200)
    fill(20)
    text("CRÉDITOS",200,300)
    
     
  }

 if(tela==1){
  background(220, 118, 51);
   stroke		(255, 255, 255)
  textAlign(CENTER);
  textSize(23);
   text("Pontos: "+pontos,80,380)
   text("Escolha a palavra correta\n para o AUMENTATIVO de DENTE.",200,50)
   image(dente,150,100,100,150);
   text("DEDÃO",200,300)
       if(mouseX>150 && mouseX<150+100 && mouseY>280 &&     mouseY<280+30){
       rect(150,280,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("DENTÃO",80,300)
       if(mouseX>40 && mouseX<40+100 && mouseY>280 && mouseY<280+30){
       rect(30,280,100,30)
     if(mouseIsPressed){
       tela=4;
       pontos=5;
     }}
  text("DENTINHO",320,300)
       if(mouseX>250 && mouseX<250+140 && mouseY>280 &mouseY<280+30){
       rect(250,280,140,30)
       if(mouseIsPressed){
         tela=11
       }}
  text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
}
 if(tela==2){
    background(220, 118, 51);
    textAlign(CENTER);
    textSize(20);
    text("DESCRIÇÃO DO JOGO:",200,50)
  textSize(16);
   text("Nome:Pequenas e grandes palavras",200,110)
  text("Ano:2°ano Ensino Fundamental",200,140)
        text("Matéria: Língua portuguesa",200,170)
  textSize(14)
    text("Resumo: O Jogo propõem a prática do uso do diminutivo \n e do aumentativo, dando entre várias opções \n apenas uma correta para ser escolhida.\n (EF02LP11) Formar o aumentativo e o diminutivo \n de palavras com os sufixos -ão e -inho/-zinho \n  ",200,230)
    textSize(20)
    text("início",300,350)
        if(mouseX>250 && mouseX<250+100 && mouseY>330 && mouseY< 330+30)   {
        rect(250,330,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
  }
 if(tela===3){
    background(175, 96, 26 );
    textAlign(CENTER);
    textSize(20);
    text("Programador(a): \n Jade Oliveira Palevicius Rodriguez \n ",200,200)
  text(" Orientador:\n",200,300)
  image(jade,150,20,100,150)
  text("início",300,350)
      if(mouseX>250 && mouseX<250+100 && mouseY>330 && mouseY< 330+30)   {
        rect(250,330,100,30)
            if(mouseIsPressed){
              tela=0;
            }
  }
}

if(tela==4){
  
  background(220, 118, 51);
  textAlign(CENTER);
  textSize(25);
   text("Escolha a palavra correta\n para o DIMINUTIVO de CÃO.",200,50)
   image(cachorro,150,100,100,150);
   text("Pontos: "+pontos,80,380)
   text("CÃOINHO",200,340)
       if(mouseX>150 && mouseX<150+100 && mouseY>320 && mouseY<320+30){
       rect(150,315,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("PEQUENO",60,340)
       if(mouseX>40 && mouseX<40+100 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("CÃOZINHO",340,340)
       if(mouseX>250 && mouseX<250+140 && mouseY>320 &&mouseY<320+30){
       rect(270,315,140,30)
       if(mouseIsPressed){
         tela=5;
       pontos=10}
       }
  text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
  
} 
  if(tela==5){
    text("Pontos: "+pontos,80,380)
  background(220, 118, 51);
   stroke(255, 255, 255)
  textAlign(CENTER);
  textSize(23);
   text("Pontos: "+pontos,80,380)
   text("Escolha a palavra correta\n para o AUMENTATIVO de AMIGO.",200,50)
   image(crianca,150,100,100,150);
   text("AMIGÃO",200,300)
       if(mouseX>150 && mouseX<150+100 && mouseY>280 &&     mouseY<280+30){
       rect(150,280,100,30)
     if(mouseIsPressed){
       tela=6
       pontos=15
     }}
  text("AMIGUINHO",80,300)
       if(mouseX>40 && mouseX<40+100 && mouseY>280 && mouseY<280+30){
       rect(30,280,100,30)
     if(mouseIsPressed){
       tela=11;
     }}
  text("GRANDE",320,300)
       if(mouseX>250 && mouseX<250+140 && mouseY>280 &mouseY<280+30){
       rect(250,280,140,30)
       if(mouseIsPressed){
         tela=11
       }}
  text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
}
  if(tela==6){
text("Pontos: "+pontos,80,380)
  background(220, 118, 51);
  textAlign(CENTER);
  textSize(25);
   text("Escolha a palavra correta\n para o DIMINUTIVO de RATO.",200,50)
   image(rato,150,100,100,150);
     text("Pontos: "+pontos,80,380)
   text("URSINHO",200,340)
       if(mouseX>150 && mouseX<150+100 && mouseY>320 && mouseY<320+30){
       rect(150,315,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("RATÃO",60,340)
       if(mouseX>40 && mouseX<40+100 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("RATINHO",340,340)
       if(mouseX>250 && mouseX<250+140 && mouseY>320 &&mouseY<320+30){
       rect(270,315,140,30)
       if(mouseIsPressed){
         tela=7
       pontos=20}
       }
  text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
  
}
  if(tela==7){
    text("Pontos: "+pontos,80,380)
  background(220, 118, 51);
   stroke(255, 255, 255)
  textAlign(CENTER);
  textSize(23);
   text("Pontos: "+pontos,80,380)
   text("Escolha a palavra correta\n para o AUMENTATIVO de MACACO.",200,50)
   image(macaco,150,100,100,150);
   text("MACAQUITO",200,300)
       if(mouseX>150 && mouseX<150+100 && mouseY>280 &&     mouseY<280+30){
       rect(150,280,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("MACACÃO",60,300)
       if(mouseX>40 && mouseX<40+100 && mouseY>280 && mouseY<280+30){
       rect(30,280,100,30)
     if(mouseIsPressed){
       tela=8
       pontos=25;
     }}
  text("MALOTÃO",340,300)
       if(mouseX>250 && mouseX<250+140 && mouseY>280 &mouseY<280+30){
       rect(250,280,140,30)
       if(mouseIsPressed){
         tela=11
       }}
  text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
}
    if(tela==8){
text("Pontos: "+pontos,80,380)
  background(220, 118, 51);
  textAlign(CENTER);
  textSize(25);
   text("Escolha a palavra correta\n para o DIMINUTIVO de LOBO.",200,50)
   image(lobo,150,100,100,150);
     text("Pontos: "+pontos,80,380)
   text("LOBINHO",200,340)
       if(mouseX>150 && mouseX<150+100 && mouseY>320 && mouseY<320+30){
       rect(150,315,100,30)
     if(mouseIsPressed){
       tela=9
       pontos=30
     }}
  text("LOBÃO",60,340)
       if(mouseX>40 && mouseX<40+100 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("LOBISOMEM",340,340)
       if(mouseX>250 && mouseX<250+140 && mouseY>320 &&mouseY<320+30){
       rect(270,315,140,30)
       if(mouseIsPressed){
         tela=11}
       }
  text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
  
}
  
  if(tela==9){
text("Pontos: "+pontos,80,380)
  background(220, 118, 51);
  textAlign(CENTER);
  textSize(25);
   text("Escolha a palavra correta\n para o DIMINUTIVO de NUVEM.",200,50)
   image(nuvens,150,100,100,150);
     text("Pontos: "+pontos,80,380)
   text("NUVES",180,300)
       if(mouseX>150 && mouseX<150+100 && mouseY>280 && mouseY<280+30){
       rect(150,280,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("NUVENS",60,300)
       if(mouseX>40 && mouseX<40+100 && mouseY>280 && mouseY<280+30){
       rect(10,280,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("NUVENZINHA",320,300)
       if(mouseX>280 && mouseX<280+140 && mouseY>280 &&mouseY<280+30){
       rect(270,280,140,30)
       if(mouseIsPressed){
         tela=10
       pontos=40}
       }
  text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
  
}
  if(tela==10){
    text("Pontos: "+pontos,80,380)
  background(220, 118, 51);
   stroke(255, 255, 255)
  textAlign(CENTER);
  textSize(23);
   text("Pontos: "+pontos,80,380)
   text("Escolha a palavra correta\n para o AUMENTATIVO de URSO.",200,50)
   image(ursos,150,100,100,150);
   text("URSOS",200,340)
       if(mouseX>150 && mouseX<150+100 && mouseY>320 &&     mouseY<320+30){
       rect(150,315,100,30)
     if(mouseIsPressed){
       tela=11
     }}
  text("URSÃO",80,340)
       if(mouseX>40 && mouseX<40+100 && mouseY>320 && mouseY<320+30){
       rect(30,315,100,30)
     if(mouseIsPressed){
       tela=12
       pontos=45;
     }}
  text("URSINHO",320,340)
       if(mouseX>250 && mouseX<250+140 && mouseY>320 &mouseY<320+30){
       rect(250,315,140,30)
       if(mouseIsPressed){
         tela=11
       }}
  text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
}
  if(tela==11){
  background(letras);
  textSize(27);
  stroke(255, 255, 0)
  text("Não foi dessa vez, \n tente novamente.",200,200)
    text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
  
}
if(tela==12){
  
  background(letras);
  text("Pontos: "+pontos,80,380)
  textSize(27);
  stroke(255, 255, 0)
  text("VOCÊ VENCEU, \n PARABENS!.",200,200)
    text("início",320,380)
        if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=0;
            }}
  
}}
