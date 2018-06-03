// Variables
let hero= {}
hero.name="aa"
hero.heroic=true
hero.health= 1000
hero.inventory=[]
hero.weapon={}
hero.weapon.type="Sink"
hero.weapon.damage= 120
console.log("start hero: "+hero.health);

let centaur= {}
centaur.name="Taron"
centaur.heroic=false
centaur.health= 200
centaur.inventory=[]
centaur.weapon={}
centaur.weapon.type="sword"
centaur.weapon.damage= 100

    //Game logic
let rest=function(creature){
  creature.health=10
  return creature
}
let pickUpItem=function(creature, item){
  creature.inventory.push(item)
  return creature
}
let dealDamage=function(attacker, defender){
  defender.health=defender.health-attacker.weapon.damage
  return defender
}
let equipWeapon=function(creature, index){
  creature.weapon=creature.inventory[index]
  creature.inventory.pop(index)
  return creature
}

let doBattle=function(heroicCreature, creature){
  if(!heroicCreature.heroic){return null}

    while(heroicCreature.health>0 && creature.health>0){
      if(heroicCreature.health>=0){  dealDamage(heroicCreature, creature)}
      if(creature.health>=0){        dealDamage(creature, heroicCreature)}
    //    console.log("hero health: "+heroicCreature.health)
    //    console.log("enemy health: "+creature.health)



      }

    //  checkIfDead(heroicCreature.health)
//if (creature.health<=0){return creature}
if (heroicCreature.health<=0){window.alert("you dead")}else{return heroicCreature}

}


//console.log(dealDamage(centaur,hero));
console.log(doBattle(hero, centaur))

console.log("report hero end: " + hero.health)






// UI
