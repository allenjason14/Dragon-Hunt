angular.module("dragonHunt").service('hunt', function(){

    this.message = "What is your decision?";
    this.dragMessage = "The dragon awaits your decision";
    this.humanHp = 15;
    this.dragonHp = 40;
    this.slaying = true;

    var damage;
    var damageDrag;

    var random = function(){
      var random = Math.floor((Math.random() * 5) + 1);
        return random;
    }

    // var critRandom = function(){
    //   var critRandom = Math.floor((Math.random() * 5) + 3);
    //     return critRandom;
    // }

    this.dragAttack = function(){
      damageDrag = random() + 2;
      var randomNum2 = random();
      if(randomNum2 === 1) {
        this.dragMessage = "The Beast Strkes, but Misses";
      }
      else if(randomNum2 <= 4){
        this.dragMessage = "The Dragon Strikes! " + damageDrag + " damage!";
        this.humanHp -= damageDrag;
      }

    this.humanDead = function(){
      if(this.humanHp <= 0){
        this.slaying = false;
        this.message = "Defeat. The Dragon is Victorious . . .";
        this.dragonMessage = "You Have been defeated";
        this.humanHp = "Defeated";
        return
      }
    }
  }


    this.dragSlayed = function(){
      if(this.dragonHp <= 0) {
        this.slaying = false;
        this.dragonHp = "Defeated";
        this.message = "Your Blade Pierces the Monster's Hide. You Are Victorious.";
        return;
      }
    }

    this.tryRest = function(){
      var randomNum = random();
      damage = random();
      if(randomNum === 1) {
        this.message = "The Dragon Pressed the Attack! No Time to Rest!";
      }
      else if(randomNum > 1){
        this.message = "The Monster Hesitated! You Restored " + damage + " Energy!";
        this.humanHp += damage;
      }
      this.dragAttack();
    }

    this.tryRun = function(){
      var randomNum = random();
      damage = random();
      if(randomNum < 3) {
        this.message = "The Dragon Has You Cornered! You Couldn't Run!";
        this.dragAttack();
      }

      else if(randomNum <= 4){
        this.message = "You Hid from the Monster! You Restored " + damage + " Energy!";
        this.humanHp += damage;
        this.dragMessage = "The Dragon Searched in Vain"
      }
      else if(randomNum === 5){
        this.message = "You Lost the Beast and Restored " + (damage + 3) + " Energy, but the Dragon Also Rested."
        this.humanHp += (damage + 3);
        this.dragonHp += 5;
        this.dragMessage = "The Beast is Rejuvinated as Well."
      }
    }

    this.tryAttack = function(){
      var randomNum = random();
      damage = random();
      if(randomNum === 1) {
        this.message = "Miss";
        this.dragAttack();
      }
      else if(randomNum <= 4){
        this.message = "You Struck the Beast! " + damage + " Damage!";
        this.dragonHp -= damage;
          // dragSlayed();
          this.dragAttack();
        }

      else if(randomNum === 5){
        this.message = "A Dire Wound! " + (damage + 3) + " Damage! Move Quickly While the Beast is Stunned";
        this.dragonHp -= (damage + 3);
        this.dragMessage = "The Monster is Unable to Move!"
          // dragSlayed();
        }
      }
    });
