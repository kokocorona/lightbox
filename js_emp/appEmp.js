function init(){
  doApi();
}

function doApi(){
  let url = "https://fakestoreapi.com/users";
  $.get(url, function(resp){
    console.log(resp);
    createEmployees(resp);
  })
}

function createEmployees(_ar){
  _ar.forEach(function(item){
    let tr = new TrClass("#id_tbody",item);
    tr.render();
  })
}


init();