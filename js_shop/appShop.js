function init(){
  doApi();
}

function doApi(){
  let url = "http://fs1.co.il/bus/shop.php";
  $.get(url, function(resp){
    console.log(resp);
    createAllProds(resp);
  })
}

function createAllProds(_ar){
  _ar.forEach(function(item){
    let product = new ShopClass("#id_row",item);
    product.render();
    // נייצר משתנה שמשתמש בקלאס שופ
  })
}


init();