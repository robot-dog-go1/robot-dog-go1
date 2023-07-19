import { Go1, Go1Mode}  from "@droneblocks/go1-js";

class myClient {                                                                                                                                           
    constructor() {                                                                                                                                          
      this.robotDog = new Go1();
      this.robotDog.init();                                                                                                                             
    }

    async blinky() {
      for (let i = 0; i < 10; i++) {
        await this.robotDog.setLedColor(255, 0, 0);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(255, 165, 0);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(255, 255, 0);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(0, 255, 0);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(75, 0, 130);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(148, 0, 211);
        await this.robotDog.wait(2000);
      }
    }
    

    async onMessage() {
      //WALKING
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goForward(0.10000000000000000, 100);
      }
      
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goBackward(0.10000000000000000, 100);
      }
      
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goLeft(0.10000000000000000, 100);
      }

      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goRight(0.10000000000000000, 100);
      }

      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goLeft(0.10000000000000000, 100);
      }
      //TURNING
      await this.robotDog.wait(1000);
      await this.robotDog.turnLeft(0.90, 1000);
      await this.robotDog.turnRight(0.50, 2000);
      //PUSH UPS
      for (let i = 0; i < 4; i++) {
        this.robotDog.setMode(Go1Mode.standDown);
        await this.robotDog.wait(2000);
        this.robotDog.setMode(Go1Mode.standUp);
        await this.robotDog.wait(2000);
      }
      //WALKING IN ANOTHER WAY

    }
}

const client = new myClient();
client.blinky()
client.onMessage();





