
export type StreetType = {
    title:string
}


export type AdressType = {
    number:number,
    street: StreetType
}
export type HouseType= {
    buildedAt: number,
    adress: AdressType,


}


export type GovernmentAdressType={
    street :StreetType
}


export type GovernmentType = {
    type: string,
    budget :number,
    staffCount:number ,
    adress:GovernmentAdressType
}

export type CityType = {
    title:string,
    houses: Array<HouseType>,
    governmentBuildings : Array<GovernmentType> ,
    citizensNumber : number

}

