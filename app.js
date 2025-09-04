const log = console.log;    //global scope

log(students);

let survey = students.reduce(function(survey, student){
    let favSubject = student.favoriteSubject;

    if(survey[favSubject]){survey[favSubject]++}
    else{survey[favSubject] = 1};

    return(survey)   
}, {});

log(survey);