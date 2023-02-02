const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema

  title: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
  },
  ingredients: {
    type: [String],
  },
  cuisine: {
    type: String,
  },
    dishType:{
  type: String,
},
  image: {
  type: String,
  default: "https://images.media-allrecipes.com/images/75131.jpg",
},
  duration: {
  type: Number,
  default: 0,

},
  created: {
  type: Date,
  default: Date.now,

},

});

// const recipe = {
//   // TODO: write the schema

//   title: "Recipe Test",
//   level: 'Easy Peasy',
//   ingredients:["Arroz", "Pato", ],
//   cuisine: "Portuguese",
//   dishType:"Roast",
//   image:"https://images.media-allrecipes.com/images/75131.jpg",
//   duration: 70,
//   created: {
//   type: Date,
//   default: Date.now,

// }};

// console.log(recipeSchema);
 
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
