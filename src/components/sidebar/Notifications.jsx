import "./sidebar.css"
import { MailOutline, DynamicFeed, ChatBubbleOutline } from '@material-ui/icons';

const Notifications = () => {
    return (
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MailOutline className="sidebarIcon" />
                    Mail
                </li>
                <li className="sidebarListItem">
                    <DynamicFeed className="sidebarIcon" />
                    Feedback
                </li>
                <li className="sidebarListItem">
                    <ChatBubbleOutline className="sidebarIcon" />
                    Messages
                </li>
            </ul>
        </div>
    )
}

export default Notifications
