class Box {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
     
      if(this.body.speed<2){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(164,106,164);
        rect(pos.x, pos.y, this.width, this.height);
        }
        else{
                                                                           
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
         
          pop();
        }
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
    
    
  };

  class Box1 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      
      if(this.body.speed<2){
        var pos =this.body.position;
      rectMode(CENTER);
      fill(93,40,159);
      rect(pos.x, pos.y, this.width, this.height);
        }
        else{
                                                                           
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
         
          pop();
        }
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
  };

  class Box2 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      
    if(this.body.speed<2){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(152,142,194);
      rect(pos.x, pos.y, this.width, this.height);
    
      }
      else{
                                                                         
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
       
        pop();
      }
  }
  score(){
    if(this.visibility<0 && this.visibility>-1005){
      
       score++;
   }
  
   }
  };

  class Box3 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
     
      if(this.body.speed<2){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(106,52,102);
        rect(pos.x, pos.y, this.width, this.height);
      
        }
        else{
                                                                           
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
         
          pop();
        }
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
  };

  class Box4 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
     
      if(this.body.speed<2){
        var pos =this.body.position;
      rectMode(CENTER);
      fill(116,42,124);
      rect(pos.x, pos.y, this.width, this.height);
      
        }
        else{
                                                                           
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
         
          pop();
        }
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
    
  };
  
  class Box5 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      
      if(this.body.speed<2){
       var pos =this.body.position;
        rectMode(CENTER);
        fill(152,98,183);
        rect(pos.x, pos.y, this.width, this.height);
          
        }
        else{
                                                                           
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
         
          pop();
        }
    
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
  };
  
  class Box6 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
     

      if(this.body.speed<2){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(179,139, 199);
        rect(pos.x, pos.y, this.width, this.height);
         }
         else{
                                                                            
           World.remove(world,this.body);
           push();
           this.visibility=this.visibility-5;
           tint(255,this.visibility);
          
           pop();
         }
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
  };

  class Box7 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      
      if(this.body.speed<2){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(154,62,174);
        rect(pos.x, pos.y, this.width, this.height);
         }
         else{
                                                                            
           World.remove(world,this.body);
           push();
           this.visibility=this.visibility-5;
           tint(255,this.visibility);
          
           pop();
         }
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
  };

  class Box8 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      
      if(this.body.speed<2){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(79, 61, 160);
        rect(pos.x, pos.y, this.width, this.height);
         }
         else{
                                                                            
           World.remove(world,this.body);
           push();
           this.visibility=this.visibility-5;
           tint(255,this.visibility);
          
           pop();
         }
    }
    
  };

  
  