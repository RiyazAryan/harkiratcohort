import {atom, selector} from "recoil"

export const todolist=atom({
    key: 'todolist',
    default: [
        {
            id: 1,
            title: "Workout",
            description:"Morning 6-7am Workout",
            isCompleted: false
        },
        {
            id: 2,
            title: "Breakfast",
            description:"Morning 8am Diet breakfast",
            isCompleted: true
        },
    ]
});

export const filteruse=atom({
    key:'filteruse',
    default:'ShowAll'
})

export const searchFilter=atom({
    key:'searchFilter',
    default:''
})

export const filteredlist=selector({
    key:'filteredlist',
    get : ({get})=>{
        const sf=get(searchFilter).toLowerCase();
        const fu=get(filteruse);
        const list=get(todolist);
        const list2 = list.filter((item)=>item.description.toLowerCase().includes(sf));
        switch(fu){
            case 'Completed':
                return list2.filter((item)=>item.isCompleted)
            case 'inComplete':
                return list2.filter((item)=>!item.isCompleted)
            default:
                return list2
        }

    }
})