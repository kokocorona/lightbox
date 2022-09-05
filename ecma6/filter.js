let prods_ar = [
  {name:"apple",price:10},
  {name:"banana",price:13},
  {name:"kiwi",price:5},
  {name:"cake",price:40}
]
// filter = מייצר מערך חדש מסונן לפי תנאי 
// יכיל מוצרים מהמערך הראשי שהמחיר שלהם שווה גבוה מ10
let expinsive_ar = [];

// מוצרים שהמחיר שלהם מתחת ל 12 
let discount_ar = [];

const init = () => {
  expinsive_ar = prods_ar.filter((item) => {
    // אם אמת דוחף למערך החדש
    // אם שקר לא יכנס למערך החדש
    if(item.price >= 10){ return true}
    else{ return false}
  })

  // ניתן לכתוב ישר בצורה הזאת וזהה לשורה 24
  discount_ar = prods_ar.filter(item =>  item.price < 12 )
  // discount_ar = prods_ar.filter(item => {
  //   return item.price < 12
  // })

  console.log(discount_ar);
  console.log(expinsive_ar);
}


init();