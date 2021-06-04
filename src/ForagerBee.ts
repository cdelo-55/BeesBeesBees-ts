class ForagerBee extends Bee {
        canFly:boolean;
        treasureChest:any;
        treasure:string;
    
        constructor() {
            super();  //invokes the constructor from the Super Class
            this.canFly = true ; // overwrites the property in the Super Class
            this.age = 10 ;
            this.job = "find pollen" ;
            this.treasureChest = [];
        }

        forage(treasure: string):void {
             this.treasureChest.push(treasure);   
           }

       
};