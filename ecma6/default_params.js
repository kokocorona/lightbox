function init(){
  showNameAndAge("biden",79); // biden 79
  showNameAndAge("koko"); // 'koko 40
  showNameAndAge(); // moshe 40
}


// ניתן להגדיר מה הערך של פרמטר בברירת מחדל במקרה שלא נעביר אותו 
// בפונקציה
function showNameAndAge(_name = "moshe", _age = 40 ){
  document.body.innerHTML += `
    <h2>Your name: ${_name}.
      and your age is :${_age}
    </h2>
  `
}


init();