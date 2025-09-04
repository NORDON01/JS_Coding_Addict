const log = console.log;    //global scope

log(students);  
//Ajout d'une propriété
let newStudents = students.map(function(student){
    student.role = 'student';
    return student;
})

log (newStudents);

//Sélection des meilleurs étudiants
let highScores = students.filter(function(student){
   return student.score >= 80;
   //ou if(student.score >= 80){return student} 
})

log(highScores);

//Sélection de l'étudiant avec l'id === 1
let singleStudent = students.find(function(student){
    return student.id === 1;
})

log (singleStudent);


//Calcul du score moyen
let averageScore = students.reduce(function (acc, student){
    log(student.id);
    log(`${acc}`);
    acc += student.score;
    return acc;
},0)/students.length;

log(`Average score: ${averageScore}`);