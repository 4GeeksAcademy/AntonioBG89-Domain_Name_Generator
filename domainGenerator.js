console.log("Mensaje desde mi archivo JS");
/* 
//imprimir 5 veces un saludo
console.log("Holi");
console.log("Holi");
console.log("Holi");
console.log("Holi");
console.log("Holi");

//for loop
// donde comienza; condicion donde termina; saltos
for (let i = 0; i <=4; i++){
    console.log("Hola");
}

let students = ["Alba","Michelle","Bernardo","Silvia","Rodolfo"];
let extensions = [".com",".net",".io"];

for (let student of students){
    console.log(student);
}

for (let extension of extensions){
    console.log(extension);
}

for (let i = 0; i < students.length; i++){
    for (let j = 0; j < extensions.length; j++){
        console.log(students[i]+extensions[j]);
    }
}

for (let i = 2; i < students.length; i++){
console.log(students[i]);
}

for (let i in students){
console.log(i);
}

for (let student of students){
console.log(student);
} 

let academy = {cohort: "Spain PT 73", students: 16, country: "Spain"};

for (let key in academy){
    console.log("nuevo ciclo:");
    console.log(key);
    console.log(academy[key]);
    console.log("---------------");
}

for (let [key, value] of Object.entries(academy)){
    console.log(key, value);
    
}

//while loop
// for = donde inicia; condicion para terminar, saltos
// Los de abajo puede servir para paginas de productos por ejemplo.
let i = true;
while(i == true){
    console.log(students[i]);
    i = false;
}

do{
    console.log(students[i]);
    i++;
}while(i == true);*/

  
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let root = [".com", ".net", ".io", ".org"];

function domainGenerator() {
  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        for (let l of root) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}

domainGenerator();