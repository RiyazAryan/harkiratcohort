import { atom, selector } from 'recoil';

export const networkAtom=atom({
    key: 'networkAtom',
    default: 102
})

export const jobsAtom=atom({
    key: 'jobsAtom',
    default: 12
})

export const msgAtom=atom({
    key: 'msgAtom',
    default: 4
})

export const notificationAtom=atom({
    key: 'notificationAtom',
    default: 10
})

export const tot_noti= selector({
    key: "tot_noti",
    get:({get})=>{
        const networkAtomcount=get(networkAtom);
        const jobAtomcount=get(jobsAtom);
        const msgAtomcount=get(msgAtom);
        const notiAtomcount=get(notificationAtom);
        return networkAtomcount+jobAtomcount+msgAtomcount+notiAtomcount
    }
})