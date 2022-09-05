function init(){
  showName("koko");
  showName2("jack");
  showName3("arrow 3")
  showName4("param 1")

  document.querySelector("#id_h2").innerHTML = multi(3,5);
}

// אם יש רק פקודה אחת שצריך להחזיר בפונקציה
// אפשר לוותר על המילה רטרן ועל הסוגריים מסולסלים {}
const multi = (_x,_y) =>  _x * _y ;

const multi2 = (_x,_y) => {
  return _x * _y
}

// אם יש רק פרמטר אחד לפונקציה אין צורך בסוגריים המעוגולת ()
const showName4 = _name => {
  document.body.innerHTML += `Welcome 4 ${_name} <br>`;
};

const showName3 = (_name) => {
  document.body.innerHTML += `Welcome 3 ${_name} <br>`;
};

//expreastion function יצירת פונקציה כמשתנה/קבוע
const showName2 = function(_name){
  document.body.innerHTML += `Welcome 2 ${_name} <br>`;
};

// statemnet function
function showName(_name){
  document.body.innerHTML += `Welcome ${_name} <br>`;
}


init();