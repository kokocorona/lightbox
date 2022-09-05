let colors_ar = ["red","blue","green","silver"]

function init(){
  selectAllH2();
  collectData();
}

function collectData(){
  let h2First = document.querySelector("#firstH2");
  // .dataset - אוסף אטרביוטים של דאטא שיצרנו
  // בהטמל
  let colorData = h2First.dataset.tziva;
  h2First.style.background = colorData;
}

function selectAllH2(){
  // querySelectorAll -> בוחר את כל האלמנטים עם הסלקטור בסוגריים
  // והופך אותם לרשימה בדומה למערך
  let h2_list = document.querySelectorAll(".title2");
  console.log(h2_list);
  h2_list.forEach(function(elem,i){
    // elem.style.color = colors_ar[i];
    let dataColor = elem.dataset.color;
    elem.style.color = dataColor;
  })


}


init();