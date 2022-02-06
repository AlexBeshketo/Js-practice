import {changeFirst, firstPropsType} from "./ex10";

test  ('objects must be the same' , () => {


     let first : firstPropsType=  {
        object: 'Map',
        type: 'Local',
        language: 'English',
        adress: {
            city : 'Kiev',
            house: '30'
        }
    }

    let second = changeFirst( first , '30')


    expect(first).toStrictEqual(second)
    // expect(first.adress.city).toBe(second.adress.city)
    // expect(second.adress.city).toBe('Kiev')


})
