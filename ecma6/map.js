let users_ar = [
  {first:"koko",last:"akof",id:1},
  {first:"moshe",last:"ofnik",id:2},
  {first:"optimus",last:"prime",id:3},
  {first:"black",last:"jack",id:4},
]


// מייצר מערך שיכיל בכל תא שם מלא לפי המערך של המשתמשים
let names_ar = []

const init = () => {
  // map-> דומה לפור איץ
  // רק שיודע להחזיר ערך כל פעם כתא חדש
  names_ar = users_ar.map(function(item){
    return `${item.first} ${item.last}`;
    // return {name:`${item.first} ${item.last}`,id:item.id}
  })

  // names_ar = []
  // users_ar.map(function(item){
  //   names_ar.push(`${item.first} ${item.last}`)
  // })
  console.log(names_ar);
}



init();