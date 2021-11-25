import "./sidebar.css"
import { WorkOutline, Timeline, Report } from '@material-ui/icons';

const Staff = () => {
    return (
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon" />
                    Manage
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcon" />
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <Report className="sidebarIcon" />
                    Reports
                </li>
            </ul>
        </div>
    )
}

export default Staff
