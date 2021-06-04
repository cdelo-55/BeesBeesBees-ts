class RetiredForagerBee extends ForagerBee{
        
        constructor() {
            super();  //invokes the constructor from the Super Class
            this.color ='grey' ;
            this.canFly = false ; // overwrites the property in the Super Class
            this.age = 40 ;
            this.job = "gamble" ;
        }

        forage(treasure: string):any {
            this.treasureChest.push("I am too old, let me play cards instead"); 
            return (this.treasureChest[0]) ;
          } 

          gamble(treasure: string):void {
            this.treasureChest.push(treasure);   
          } 
           
};