
let styles = ["Джаз","Блюз","Рок-н-Ролл"];
for(let i= 0; i<styles.length;i++){
    if (styles[i]==styles[styles.length-2]) {
        styles[i]="Класика"
    }
}
console.log( styles);
delete styles[0];
console.log(styles[0]);
styles.splice(0,1,"Реп","Реггі")
console.log( styles);






