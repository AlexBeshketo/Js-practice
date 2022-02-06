import {CityType} from "./ex2-extra";


let city: CityType

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
                type:'Fire-Station', budget: 500000, staffCount: 1000,
                adress: {
                    street :{
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

// 01.Create type CityType
// 02.Fill  the object  to pass the test

test.skip('test city should be 3 houses ', () => {
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].adress.number).toBe(100);
    expect(city.houses[0].adress.street.title).toBe('White street');


})
