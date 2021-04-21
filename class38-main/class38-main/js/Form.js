class Form {

  constructor() {
    this.input1 = createInput("enter ypur name");
    this.button = createButton('submit');
    this.input2 = createElement('enter your answer');
    this.title=createElement('h2');
  this.q = createElement('h3')
  this.o1 = createElement('h4')
  this.o2 = createElement('h4')
  this.o3 = createElement('h4')
  this.o4 = createElement('h4')  
}

  hide(){
    this.input2.hide();
    this.button.hide();
    this.input1.hide();
    this.title.hide();
  }

  display(){
      this.title.html("quez  Game");
    this.title.position(displayWidth/2-50, 0);

    this.input1.position(displayWidth/2-40,displayHeight/2-80);
    this.input2.position(displayWidth/2-80,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
   this.q.html("which nis favourite color")
   this.q.position(350,150)
   this.o1.html("green")
   this.o1.position(150,100)
   this.o2.html("green")
   this.o2.position(150,130)
   this.o3.html("green")
   this.o3.position(150,160)
   this.o4.html("green")
   this.o4.position(150,190)
   
   this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-40,displayHeight/4);
    });

  }
}
