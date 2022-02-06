type PropsType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    adress: {
        street: {
            title: string
        }
    }
}


let props: PropsType;

beforeEach(() => {
        props = {
            name: "Alex",
            age: 18,
            lessons: [{title: '1'}, {title: '2'} , {title: '3'}],
            adress: {
                street: {
                    title: 'Nezavisimosti street'
                }
            }
        }
    }
)


test('desctruct', () => {

    const {name, age} = props

    expect(name).toBe('Alex')

})


test ('array' , ()=> {


    const [t1, ...propsNew ] = props.lessons

    expect(propsNew.length).toBe(2)
} )