//const prompt = require('prompt-sync')();

// creating a ship class
class Ship{

    constructor (name, hull, firePower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
    //attack method to determine how to reduce opponents hull points
        attack(targetShip){
            
            if (Math.random() < this.accuracy) {
            targetShip.hull-=this.firePower;
            console.log(`${targetShip.name} is hit.It's hull is now ${targetShip.hull} `)
            //alert(`${targetShip.name} is hit.It's hull is now ${targetShip.hull} `)
            return targetShip.hull;
            
            }
            else{
                console.log(`${this.name} missed ${targetShip.name}.${targetShip.name} has ${targetShip.hull} points left.`)
                //alert(`${this.name} missed ${targetShip.name}.${targetShip.name} has ${targetShip.hull} points left.`)
                return targetShip.hull;
            }
        
           
             
        }
    
}
//creating my ship
const ussHelloWorld = new Ship('ussHelloWorld',20,5,0.7);
console.log(ussHelloWorld)

//creating alien ships
let aliens = [];
function createAlienShip(){
    for(i=0;i<6;i++){
    let name = 'AlienShip'+(i+1);
    let hull = Math.floor(Math.random()*(6-3+1)+3)
    let firePower= Math.floor(Math.random()*(4-2+1)+2)
    let accuracy = (Math.floor(Math.random()*(0.8-0.6))+0.6).toFixed(1);
    aliens[i] = new Ship(name,hull,firePower,accuracy);
    }}
createAlienShip()
console.log(aliens)


//ussHelloWorld.attack(alien1);

//GAME FUNCTION - this function does one round of battle between the player and one alien ship till one of their hull points reaches below zero

function game(player, alien){
    while(alien.hull>0 && player.hull>0){
            console.log("=====================================================")

            console.log(`%c ${player.name} is attacking ${alien.name}.`, "color:blue");
           
            alien.hull=player.attack(alien); 
            if(alien.hull>0){

                console.log(`%c ${alien.name} has not been destroyed.`,"color:red");
                console.log('=====================================================')
                console.log(`%c  ${alien.name} is attacking you.`,"color:blue")
                
                player.hull = alien.attack(player)

            }else if(alien.hull<=0){
                console.log(`%c ${alien.name} has been destroyed.You win.`,"color:green")
                alert(` ${alien.name} has been destroyed.You win.`)

                
            }else if(player.hull<=0){
                console.log(`${player.name} has been destroyed.Game over`)
                alert(`${player.name} has been destroyed.You lose.Game over`)
            
                break;
                }}
                
        
            }   

    
                  
 

    function startGame(){
        for(i=0;i<aliens.length;i++){  
           game(ussHelloWorld,aliens[i]); 
           if (i<(aliens.length-1)){
           
           let input = window.prompt('Do you want to "attack" or "retreat"');
          
           input = input.toLowerCase();
           if (input === 'attack'){
            
            continue;
           }
            else if (input === "retreat"){
                
            console.log("%c Game over.You win",'color:green')
            alert("Game over.You win")
            return;
           }
        }           

        
       

        }    alert("Game over.")

    }
    
    