const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {

    this.potions.map(u => {
      if (u.name ===potionName.name){
        return `Зелье ${potionName} уже есть в инвентаре!`;
      }
    })
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++){
      let tempName = this.potions[i].name
   
      if (tempName === potionName){
          this.potions.splice(i,1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i++){
      if (this.potions[i].name === oldName){
        this.potions[i].name = newName;
      }
    }
  },
};
