
export type firstPropsType = {
    object: string,
    type: string
    language: string,
    adress: {
        city : string,
        house:string,

    }
}


export const changeFirst= (u:firstPropsType , house:string  ) => {

    return{
        ...u , adress: {...u.adress, house:house }
    }
}
