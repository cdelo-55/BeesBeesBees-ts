class HoneyMakerBee extends Bee {
    
        job:string;
        honeyPot:number ;
    
        constructor() {
            super();  //invokes the constructor from the Super Class
            this.honeyPot = 0 ; // overwrites the property in the Super Class
            this.age = 10 ;
            this.job = "make honey" ;
        }

        makeHoney(): void {
            this.honeyPot += 1;   
          }

        giveHoney(): void {
            this.honeyPot -= 1;   
          }

 };
