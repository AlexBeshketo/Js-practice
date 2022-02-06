import {MouseEvent} from "react";

export const Events = () => {

    const deleteUser = (event:MouseEvent<HTMLButtonElement> ) => {

        console.log(event.currentTarget.name)


    }

    const createUser = () => {
        console.log('User has been created ')
    }

    const onNameChanged = () => {
        console.log('name changed ')
    }

    const focusLostHadler = () => {
        console.log('focus lost')
    }

    return (
        <>
            <textarea onChange={onNameChanged} onBlur={focusLostHadler} >Введите текст </textarea>
            <button name='delete' onClick={deleteUser}>delete</button>
            <button name='save' onClick={deleteUser}>create</button>
            <input type={"number"} />

        </>
    )
};
