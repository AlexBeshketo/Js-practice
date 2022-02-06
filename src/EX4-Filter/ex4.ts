

const ages = [100,100,300, 90]

const newAges=ages.filter(s => s>100)
console.log(newAges)


type CourseType = [ObjectsType, ObjectsType, ObjectsType]
type ObjectsType = {
    title: string ,
    price : number
}



// const filterCourses = courses.filter((c)=> {c[price]>200})
// console.log(filterCourses)