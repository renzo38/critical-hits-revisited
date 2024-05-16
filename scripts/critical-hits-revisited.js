//TODO
//Add a way to listen for critical hits
//On a critical hit, roll a table
//Make the table a decision of the damage types associated with the roll
//Apply the table effects to the target of the attack

//Hooks.on('init', () => {}) the code here will focus on loading the crit tables
//required MIDI QOL for hits
//optional feature to make the crit tables available in the critical options list in midiqol (likely not possible without looking at midiqol source)

//This will be left for now, I'll get back to doing this if it is productive.
//Advice from u/noncasus on reddit
/*
Hooks.on("dnd5e.rollAttack", async (item, roll) =>{ code here });

And

Hooks.once("dnd5e.applyDamage", async (a, b, options) => {
const isCrit = options?.midi?.isCritical; //to have midi check for critical (I assume from within its workflow)
}); 
*/