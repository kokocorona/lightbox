function init(){
  declareDataEvents();
}

function declareDataEvents(){
  // [data-he] -> ידבר רק עם כפתורים שיש להם את האטרביוט בתוך הסוגריים
  let btns_list = document.querySelectorAll("button[data-he]");
  btns_list.forEach(function(elem){
    // let heData = elem.dataset.he
    // בדיוק כמו למעלה אוסף את הדאטא סט מהאטרביוט
    let heData = elem.dataset["he"];
    elem.addEventListener("click", function(){
      alert(heData);
    })
  })
  console.log(btns_list);
}


init();