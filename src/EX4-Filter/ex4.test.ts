// @ts-ignore
test.skip('should take old men older then 90' , () => {

    const ages = [100,300,49, 90]

    const newAges=ages.filter(s => s>100)

    expect(newAges.length).toBe(1)
    expect(newAges[0]).toBe (300)


})

 test.skip  ('tests should must be cheaper then 160' , () => {

    const courses:CourseType= [
        {title: 'CSS' , price : 210},
        {title: 'REACT ' , price : 500},
        {title: 'JS ' , price : 300},
    ]

    const filterCourses = courses.filter(c => c.price >200)

    expect(filterCourses.length).toBe(3)
    expect(filterCourses[0].title).toBe ("CSS")

})

test.skip ('get onle completed tasks' ,() => {
    const tasks = [
        {id:1, title: 'Beer', isDone: false},
        {id:2, title: 'Juice', isDone: true},
        {id:3, title: 'Pienas', isDone: true},
        {id:4, title: 'Wolt', isDone: true},
    ]


const completedTask= tasks.filter(item => item.isDone)

expect(completedTask.length).toBe(3)
    expect (completedTask[0].title).toBe ('Juice')


    })


