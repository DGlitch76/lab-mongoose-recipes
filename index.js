const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()


  })



  // .then(() => {
  // Run your code here, after you have insured that the connection was made


  //ALL RECIPES
  // data.forEach(recipe => {
  //   Recipe.create(recipe)
  //     .then((recipe) => {
  //       console.log('Recipe was Created!', recipe);
  //     })
  // })
  //   .catch((err) => {
  //     console.log('No recipe Created!', err);
  //   });
//Iteration 2
  .then(() => {

    const newRecipe = new Recipe({
      // TODO: write the schema

      title: "Recipe Test",
      level: 'Easy Peasy',
      ingredients: ["Arroz", "Pato"],
      cuisine: "Portuguese",
      dishType: "Roast",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: 70,
    });

    Recipe.create(newRecipe);
    console.log(newRecipe);
  })

  .catch(error => {
    console.error("Error - Recipe wasn't created", error);
  });

//Iteration 3
Recipe.insertMany(data)
  .then((data) => {
    console.log("recipes inserted in db",data);
  })
  .catch(error => {
    console.error('Error - No recipes inserted in database', error);
  });

  //Iteration 4
  Recipe.findOneAndUpdate({title: "Asian Glazed Chicken Thighs"}, {duration: 45}, {cuisine:"Asian Fusion"})
  .then((updateRecipe) => {
    console.log("Recipe Updated", updateRecipe);
  })
  .catch(error => {
    console.error('Erros No update was made', error);
  });

//Iteration 5
  Recipe.findOneAndDelete({title: "Recipe Test"})
  .then((deleteRecipe) => {
    console.log("Recipe Deleted", deleteRecipe);
  })
  .catch(error => {
    console.error('Error - No recipe was deleted', error);
  })
  
  .finally(()=>{
    mongoose.connection.close()
 });


  // .catch(error => {
  //   console.error('Error - No recipe was deleted', error);
  // });