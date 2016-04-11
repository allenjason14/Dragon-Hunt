angular.module("dragonHunt").service('hunt', function(){

    this.message = "What is your decision?";
    this.humanHp = 15;
    this.dragonHp = 25;
    this.slaying = true;

    var damage;
    var damageDrag;

    var random = function(){
      var random = Math.floor((Math.random() * 5) + 1);
        return random;
    }

    var critRandom = function(){
      var critRandom = Math.floor((Math.random() * 5) + 3);
        return critRandom;
    }

    var dragAttack = function(){
      if(random() === 1) {
        this.message = "The Beast Strkes, but Misses";
      }
      else if(random() <= 4){
        damageDrag = random() + 1;
        this.message = "The Dragon Strikes! " + damageDrg + " damage!";
        this.humanHp -= damageDrag;
      }
      if(humanHp <= 0){
        this.slaying = false;
        this.message = "Defeat. The Dragon is Victorious . . .";
        this.humanHp = "Defeated";
      }
    }
    // if(random() === 1) {
    //   this.message = "Miss";
    //   dragAttack();
    // }
    // else if(random() <= 4){
    //   damage = random();
    //   this.message = "You struck the beast! " + damage + " damage!";
    //   this.dragonHp -= damage;


    var dragSlayed = function(){
      if(this.dragonHp <= 0) {
        this.slaying = false;
        this.dragonHp = "Defeated";
        this.message = "Your Blade Pierces the Monster's Hide. You Are Victorious.";
        return;
      }
    }

    this.tryRest = function(){
      if(random() === 1) {
        this.message = "The Dragon Pressed the Attack! No Time to Rest!";
      }
      else if(random() > 1){
        damage = random();
        this.message = "The Monster Hesitated! You Restored " + damage + " Energy!";
        this.humanHp += damage;
      }
      dragAttack();

    }

    this.tryRun = function(){
      if(random() <= 2) {
        this.message = "The Dragon Has You Cornered! You Couldn't Run!";
        // dragAttack();
      }
      else if(random() <= 4){
        damage = random();
        this.message = "You Hid from the Monster! You Restored " + damage + " Energy!";
        this.humanHp += damage;
      }
      else if(random() === 5){
        damage = critRandom();
        this.message = "You Lost the Beast and Restored " + damage + " Energy, but the Dragon Also Rested."
        this.humanHp += damage;
        this.dragonHp += 5;
      }
    }

    this.tryAttack = function(){

      if(random() === 1) {
        this.message = "Miss";
        dragAttack();
      }
      else if(random() <= 4){
        damage = random();
        this.message = "You struck the beast! " + damage + " damage!";
        this.dragonHp -= damage;
          dragSlayed();
          dragAttack();
        }

      else if(random() === 5){
        damage = critRandom();
        this.message = "A dire wound! " + critRandom() + " damage! The beast is stunned!";
        this.dragonHp -= damage;
          dragSlayed();
          dragAttack();
        }
    }
});
