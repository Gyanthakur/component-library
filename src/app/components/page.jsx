import ComponentsPage from "../pages/components";
import useToggle from '@/app/hooks/useToggle.js'
export default function Components(){
    return (
        <ComponentsPage useToggle={useToggle}/>
    )
}