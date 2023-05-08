import { Outlet } from "react-router-dom";
import NavbarNotice from "../components/common/NavbarNotice"

function SubLayoutNotice() {

    return (
        <>  
            <NavbarNotice/>
            <Outlet/>
        
        </>
    );
}

export default SubLayoutNotice;