import {multiply, splitIntoWords, sum} from "./ex1";


let a:number
let b:number
let c:number

beforeEach (() => {
    a=1;
    b=2;
    c=3;

})

test.skip('sum should be correct', () => {
    //data

    //action
    const result1 = sum(a, b);
    const result2 = sum(a, c);



    //expect result

    expect(result1).toBe(3)
    expect(result2).toBe(5)



})


test.skip ('multiply should be correct' , ()=> {

    //data
    let a = 2
    let b = 1
    let c = 3
    //action
    const result1 = multiply(a, b);
    const result2 = multiply(a,c);


    //expect result

    expect(result1).toBe(2)
    expect(result2).toBe(6)

})

test.skip ('splitting into worlds should be correct' , ()=>{

    //data
    const sent1= 'Hello my friend!'
    const sent2= 'JS - the best programming language.'

    //action
    const result1
        =splitIntoWords(sent1)


    //expect result

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')


})
