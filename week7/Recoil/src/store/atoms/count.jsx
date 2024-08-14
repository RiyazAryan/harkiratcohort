import { atom, selector } from 'recoil'

export const countAtom= atom({
    key: "countAtom",
    default: 0
})

export const evenSelector=selector({
    key: "evenSelector",
    get:({get})=>{
        const count=get(countAtom);
        return count%2
    }
})

/* export const evenSelector=selector({
    name:"evenSelector",
    get:(props)=>{
        const count=get(countAtom);
        return count%2
        }
}),
*/

//it is same as  useMemo here if countAtom value changes it runs just creating useMemo and adding countAtom as dependecy