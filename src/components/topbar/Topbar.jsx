import "./topbar.css"
import { NotificationsNone, Settings, Language } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">DashBoardByAlexandre</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">20</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language />
                        <span className="topIconBadge">20</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>
                    <img src="/image/mariage.jpg" alt="marriage" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
