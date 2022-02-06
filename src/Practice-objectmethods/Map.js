let students = [
    {
        name: 'Ivan',
        age: 20,
        isMarried: false,
        score: 85
    },
    {
        name: 'Tanya',
        age: 26,
        isMarried: true,
        score: 80
    },
    {
        name: 'Lena',
        age: 45,
        isMarried: false,
        score: 70
    },
    {
        name:'Kolya',
        age:30,
        isMarried:true,
        score: 70
    },
];


let newStudents= students.map (s=>  s.name === 'Ivan' ?  {...s , score: s.score + 10} : s)

console.log(newStudents)