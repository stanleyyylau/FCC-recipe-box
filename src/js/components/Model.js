function Model(name){
  this.name = name;
  self = this;
  this.recipes = (function(){
    if(localStorage.getItem(name)){
      var recipesStr = localStorage.getItem(name);
      return JSON.parse(recipesStr);
    }else {
      var data = [
        {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]},
        {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]},
        {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
      ];
      var dataStr = JSON.stringify(data);
      localStorage.setItem(self.name, dataStr);
      return data;
    }
  })();

  this.deleteRecipe = function(index){
    var allRecipeObj = [];
    this.recipes.forEach(function(value, i){
      if(index!=i){
        allRecipeObj.push(value);
      }
    })
    var allRecipeStr = JSON.stringify(allRecipeObj);
    this.recipes = allRecipeObj;
    localStorage.setItem(this.name, allRecipeStr);
    return this.recipes;
  };

  this.addRecipe = function(newRecipeObj){
    this.recipes.push(newRecipeObj);
    var recipesStr = JSON.stringify(self.recipes);
    localStorage.setItem(this.name, recipesStr);
    return this.recipes;
  };

  this.editRecipe = function(index, newObj){
    this.recipes[index]=newObj;
    var newRecipeStr = JSON.stringify(this.recipes);
    localStorage.setItem(this.name, newRecipeStr);
    return this.recipes;
  }
}

export default Model;
