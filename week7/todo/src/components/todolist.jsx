import { filteruse, searchFilter,} from "../store/atoms/atoms"
import { useSetRecoilState } from "recoil";

export default function Todolist(){
    const setFilter= useSetRecoilState(filteruse)
    const setSearchFilter=useSetRecoilState(searchFilter)

    function filtercheck(e){
        setFilter(e.target.value);
    }

    function filterSearch(e){
        setSearchFilter(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={filterSearch} placeholder="Search"/>
            <select  onChange={filtercheck}>
                <option value="Show All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incomplete">Incomplete</option>
            </select>
            <br></br>
        </div>
    )
}