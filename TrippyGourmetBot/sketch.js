// Started off from
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F20

// Tracery by Kate Compton
// https://github.com/galaxykate/tracery

let grammar;

// Here is the grammar
let data = {
  	"start" :  ["#cooked.capitalize# #greens# #portion# #plated# #cooked# #mains# #medium#. #Extra#"],
  	"cooked" : ["#adverb# #action#"],
  		"adverb" : ["mildly", "roughly", "finely", "lightly", "overly","slightly","thoroughly","abysmally","ruthlessly"],
  		"action" : ["sauteed", "blanched", "stir-fried", "braised", "tossed", "fried", "steamed", "burnt", "roasted","washed"],
  	"greens" : ["carrot", "broccoli", "cabbage", "onion", "aubergine", "tomato", "okra","peas"],
  	"portion" : ["pieces", "shreds", "chunks", "slices", "crumbs"],
  	"plated" : ["with", "served with", "served under", "under", "plated with", "drizzled on", "layered with", "sprinkled on", "spooned beside", "poured over", "as topping on", "to garnish over" ],
  	"mains" : ["bean", "tofu", "bread", "cheese", "wheat sprout", "rice", "potato", "moong", "rajma", "dudhi","tinda","cauliflower", "vangi","tuvar","chana"],
  	"medium" : ["salad", "gravy", "hotpot", "soup", "filling", "bhel", "upma", "khichadi", "bhurji", "sandwich", "pizza","achaar","masala papad"],
  	"Extra" : ["Malai maar ke", "Made in Amul butter", "Chutney extra", "Sambar upar se", "Makkhan maar ke", "Sukha puri bhi", "Aloo slice bhi", "Extra onion", "Extra garlic", "Tel zyada hogaya"],
  	"originReply" :  ["#cooked# #greens# #portion# #plated# #cooked# #mains# #medium#"]
  }

//   const fonts = [
//   "'Playfair Display', serif",
//   "'Inter', sans-serif",
//   "'Fira Code', monospace",
//   "'Archivo Black', sans-serif",
//   "'Amatic SC', cursive",
//   "'Courier Prime', monospace"
// ];

const fontMap = [
  { name: 'Playfair Display', css: 'font-playfair' },
  { name: 'Inter', css: 'font-inter' },
  { name: 'Fira Code', css: 'font-fira' },
  { name: 'Archivo Black', css: 'font-archivo' },
  { name: 'Amatic SC', css: 'font-amatic' },
  { name: 'Courier Prime', css: 'font-courier' }
];


function setup() {
  noCanvas();
  // Make the grammar
  grammar = tracery.createGrammar(data);

  // A button to generate a new sentence
  let button = select('#generate');
  button.mousePressed(generate);

  // A button to clear everything
  let clearButton = select('#clearButton');
  clearButton.mousePressed(clearAll);
}

// // Remove everything
// function clearAll() {
//   let elements = selectAll('.text');
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].remove();
//   }
// }

//clear all for Grid Card version
function clearAll() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
}


// generate for earlier line text version
// function generate() {
//   let expansion = grammar.flatten('#start#');
//   // console.log(grammar.expand('#start#'));
//   let par = createP(expansion);
//   let r = floor(random(100, 255));
//   let g = floor(random(150, 255));
//   let b = floor(random(200, 255));
//   par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
//   par.class('text');
// }

//generate for card version
// function generate() {
//   const expansion = grammar.flatten('#start#');
//   const div = document.createElement('div');
//   div.className = 'card';

//   const r = Math.floor(Math.random() * 155 + 100);
//   const g = Math.floor(Math.random() * 105 + 150);
//   const b = Math.floor(Math.random() * 55 + 200);
//   div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

//   div.textContent = expansion;
//   document.getElementById('grid').appendChild(div);
// }

//cards and variable fonts with custom styling

function generate() {
  const expansion = grammar.flatten('#start#');
  const div = document.createElement('div');
  div.classList.add('card');

  // Apply background color
  const r = Math.floor(Math.random() * 155 + 100);
  const g = Math.floor(Math.random() * 105 + 150);
  const b = Math.floor(Math.random() * 55 + 200);
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Apply random font class
  const font = fontMap[Math.floor(Math.random() * fontMap.length)];
  div.classList.add(font.css);

  // Insert text
  div.textContent = expansion;

  // Append to grid
  document.getElementById('grid').appendChild(div);
}