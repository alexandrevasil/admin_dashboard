import "./sidebar.css"
import Dashboard from "./Dashboard"
import QuickMenu from "./QuickMenu"
import Notifications from "./Notifications"
import Staff from "./Staff"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <Dashboard />
                <QuickMenu />
                <Notifications />
                <Staff />
            </div>
        </div>
    )
}

export default Sidebar
