/// spread opreatores ... 
// שכפול תאים,מאפיינים

let def_ar = ["d","e","f"];
// ... -> ישכפל את התאים של המערך הראשון לאיי בי סי איי אר
// ויציב כל אחד מהתאים של המערך הראשון בתא משלו במערך השני
let abc_ar = ["a","b","c",...def_ar,"g","h"];

let four_ar = [4,5,6];
let one_ar = [1,2,3];
// יכול די בקלות לחבר בין מערכים שונים לעמרך שיכיל את כל התאים
let all_ar = [...one_ar,...four_ar];

// שכפול מערך ללא רפרנס
let duplicate_ar = [...one_ar];

let car1 = {name:"subaru",color:"white"};
// ייצר אובייקט עם תא חדש בזכרון שהמאפיינים שלו משכופלים מקאר 1
// אך הם לא עם רפרנס , ואם נשנה אותו ישפיע רק עליו
let car2 = {...car1};
car2.name = "tesla";

// ניתן בתוך הסוגריים להוסיף ולערוך מאפיין שקיים כבר בקאר 1
let car3 = {...car1, color:"red",km:222222}
car3.year = 2022;

console.log(abc_ar);


function init(){

}


init();