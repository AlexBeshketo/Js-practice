

export type LocalTechType ={
    id: number,
    title: string
}


export type StudentType = {
    'name': string
    age: number
    isActive: boolean
    adress: AdressType
    technologies :Array<LocalTechType>
}
export type AdressType = {
    street: string
    city: LocalCityType
}

export type LocalCityType = {
    title: string
    countryTitle: string
}


export const student: StudentType = {
    'name': 'Alex',
    age: 26,
    isActive: false,
    adress: {
        street: 'Yunkerova-30B',
        city: {
            title: 'Kyiv',
            countryTitle: 'Ukraine'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: "React"
        },
        {
            id: 3,
            title: "JS"
        },
    ]
}

console.log(student.age)
console.log(student.name)