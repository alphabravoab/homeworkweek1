// Variables


let hero= {}


hero.name="aa"
hero.heroic=true
hero.health= 1000
hero.inventory=[]
hero.weapon={}
hero.weapon.type="Sink"
hero.weapon.damage= 120
console.log(hero);
let centaur= {}


centaur.name="Taron"
centaur.heroic=false
centaur.health= 500
centaur.inventory=[]
centaur.weapon={}
centaur.weapon.type="sword"
centaur.weapon.damage= 100
console.log(centaur);
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
  if(!heroicCreature.heroic){return null}else{
  while(heroicCreature>0){
    dealDamage(heroicCreature, creature)
    dealDamage(creature, heroicCreature)
  }
  if (heroicCreature.health<0){
    window.alert("you dead")
  }else {
    console.log(heroicCreature)
    return heroicCreature

    }
  }
}

console.log(dealDamage(centaur,hero));
console.log(doBattle(hero, centaur))






// UI
