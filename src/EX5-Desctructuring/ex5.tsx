type ObjType= {
    name: string,
    age: 18,
    sex: {
        man: {
            girl:string
        }
    }
}




let obj:ObjType = {
    name: 'Vasya',
    age: 18,
    sex: {
        man: {
            girl:'Alya'
        }
    }
}

export const ManComponent:React.FC<ObjType> = ({name,sex: man, ...obj}) => {




    return <div>

    </div>
}


