
import {StudentType} from "../EX2-Objects/ex2";
import {addMoneyToBudget, addSkill, doesStudentLiveIn, makeStudentActive, repairHouse} from "./ex3";
import {CityType, GovernmentAdressType} from "../EX2-Objects/ex2-extra";

let student:StudentType
let city:CityType

 beforeEach(() => {
    student = {
        'name': 'Alex',
        age: 26,
        isActive: false,
        adress: {
            street: 'Yunkerova-30B',
            city: {
                title: 'Minsk',
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
})

test.skip ('new tech skill should be added to student' , ()=> {
    expect(student.technologies.length).toBe(3);
        addSkill(student, 'JS');

        expect (student.technologies.length).toBe(4);
        expect(student.technologies[3].title).toBe('JS')
        expect(student.technologies[3].id).toBeDefined();
})
test.skip ('student should be made active' , ()=> {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);

    expect (student.isActive).toBe(true);

})


test.skip ('Doesstudentliveincity? ' , ()=> {



    let result1=doesStudentLiveIn (student, 'Moscow');
    let result2=doesStudentLiveIn (student, 'Minsk');


    expect (result1).toBe(false);
    expect (result2).toBe(true);


})

beforeEach(() => {
    city = {
        title: 'New-York',
        houses: [
            {
                buildedAt: 2012,
                adress: {
                    number: 100, street: {
                        title: 'White street'
                    }
                },
            },
            {
                buildedAt: 2015,
                adress: {
                    number: 100, street: {
                        title: 'White street'
                    },
                },
            },
            {
                buildedAt: 2010,
                adress: {
                    number: 100, street: {
                        title: 'White street'
                    }
                }
            },],
        governmentBuildings: [
            {
                type:'Hospital', budget :200000, staffCount:200 ,
                adress: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },

    {
        type:'Fire-Station', budget: 500000, staffCount: 1000, adress: {
            street :{
                title: 'South Str'
            }
        }
    }
    ],
        citizensNumber: 1000000
    }


    test.skip('Budget should be changed for Hospital' , ()=> {
    addMoneyToBudget (city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

    test.skip ('House should be repared' , () => {
    repairHouse(city.houses[1]);


})



})