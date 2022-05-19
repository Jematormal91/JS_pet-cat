// Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.

/* Create an object that represents a cat. 
It should have properties for tiredness, hunger, loneliness, and happiness

Next, write methods that increase and decrease those properties. 
Call them something that actually represents what would increase or 
decrease these things, like "feed", "sleep", or "pet".

Last, write a method that prints out the cat's status in each area. 
(Be creative e.g. Paws is really hungry, Paws is VERY happy.) */

let cat = {
    tiredness: 0,
    hunger: 0,
    loneliness: 0,
    happiness: 0,
    
    play: function() {
      this.hunger += 1;
      this.happiness += 5;
      this.tiredness += 5;
      this.loneliness -=2;
    },
    
    feed: function() {
      this.hunger -= 5;
      this.happiness += 5;
      this.tiredness -= 1;
      this.loneliness -= 1;
    },
    
    pet: function() {
      this.loneliness -= 5;
      this.tiredness += 2;
      this.happiness += 2;
    },
    
    sleep: function() {
      this.tiredness -= 5;
      this.loneliness += 2;
    },
    
    status: function() {
        if (this.tiredness > 5){
            console.log("Paws needs a nap.");
        }
        else if (this.tiredness <= 5 && this.tiredness > 0){
            console.log("Paws is not so tired.");
        }
        else if (this.tiredness <= 0) {
            console.log("Paws is ready to play!");
        }
        if (this.hunger > 5){
            console.log("Paws needs to eat.");
        }
        else if (this.hunger <= 5 && this.hunger > 0){
            console.log("Paws is satisfied.");
        }
        else if (this.hunger <= 0) {
            console.log("Paws is not hungry.");
        }
        if (this.loneliness > 5){
            console.log("Paws misses you A LOT.");
        }
        else if (this.loneliness <= 5 && this.loneliness > 0){
            console.log("Paws is pretty chill.");
        }
        else if (this.loneliness <= 0) {
            console.log("Paws wants to be alone!");
        }
        if (this.happiness > 5){
            console.log("Paws is SUPER HAPPY!");
        }
        else if (this.happiness <= 5 && this.happiness > 0){
            console.log("Paws is so content.");
        }
        else if (this.happiness <= 0) {
            console.log("Help! Paws is depressed!");
        }
    }
  }
  
  cat.feed();
  cat.pet();
  cat.play();
  cat.sleep();
  cat.status();
