import {StudentType} from "../EX2-Objects/ex2";
import {CityType, GovernmentType, HouseType} from "../EX2-Objects/ex2-extra";

export function getNumber (a:number, b:number) {
    return a+b
}

export const sum= (a:number, b:number) => {
    return a+b;
}

export const addSkill= (student:StudentType , skill:string) => {
    student.technologies.push({id:new Date().getTime(),
    title:skill
    })
}

export function makeStudentActive(student:StudentType) {
    student.isActive=true;
}


export const doesStudentLiveIn = (s:StudentType, city:string) => {
    return s.adress.city.title === city;
}

export function addMoneyToBudget (building:GovernmentType, budget : number) {
    building.budget += budget
}
export const  repairHouse = (houseType: HouseType) => {
    houseType.repaired=true;
}