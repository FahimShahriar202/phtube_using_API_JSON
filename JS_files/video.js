//1) fetch, load and show category on html

// create loadCategories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then( res => res.json())
  .then((data)=> displayCatergories(data.categories))
  .catch((error) => console.log(error));

}

loadCategories();

// create displayCatergories

const displayCatergories = (categories) => {
  categories.forEach((item) => {
    console.log(item);

  });
  

}