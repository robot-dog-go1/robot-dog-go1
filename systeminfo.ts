import { Go1 } from "@droneblocks/go1-js";
import { Go1State } from "@droneblocks/go1-js/dist/mqtt/go1-state";                                                                                                        
                                                                                                                                                           
class myClient {                                                                                                                                           
  private robotDog: Go1;                                                                                                                                   
                                                                                                                                                           
  constructor() {                                                                                                                                          
    this.robotDog = new Go1();                                                                                                                             
    this.robotDog.init();                                                                                                                                  
  }                                                                                                                                                        
                                                                                                                                                           
  async onMessage() {                                                                                                                                      
    //FOR SYSTEM INFORMATION {Go1State} IT NEEDS TO BE IN TYPESCRIPT
    const state: Go1State = await this.robotDog.go1State;
    const hwVers: string = state.robot.version.hardware;
    console.log(`hardware version is ${hwVers}`);
  }
}

const client = new myClient();
client.onMessage();

