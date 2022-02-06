let students = [
    {
        name: 'Ivan',
        age: 20,
        isMarried: false,
        score: 85
    },
    {
        name: 'tanya',
        age: 26,
        isMarried: true,
        score: 80
    },
    {
        name: 'Alex',
        age: 45,
        isMarried: false,
        score: 70
    },
    {
        name:'kolya',
        age:30,
        isMarried:true,
        score: 70
    },
];

students.sort((a,b)=>   b.score -a.score);
students.sort((a,b)=>   a.name<= b.name? -1: 1 );
students.sort((a,b)=>   a.name.toLowerCase()<= b.name.toLowerCase()? -1: 1 );


const numbers = [1,300, 45, 600 ,-3,-100,0]
for (let k = 0; k <numbers.length-1 ; k++) {
    let flag=true
    for (let i=0; i<numbers.length-1-k; i++) {
        if (numbers[i]>numbers[i+1]) {
            flag=false;
            //меняем местами два элемента массива
            // let temp=numbers[i+1]
            // numbers[i+1]=numbers[i]
            // numbers[i]=temp
            [numbers[i+1], numbers[i]]= [numbers[i], numbers[i+1]];
        }
    }
    if (flag) break
};

console.log(numbers)