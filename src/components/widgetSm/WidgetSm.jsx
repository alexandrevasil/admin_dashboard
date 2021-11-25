import { Visibility } from '@material-ui/icons'
import './widgetSm.css'

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="/image/mariage.jpg" alt="hello" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alexandre Vasileiadis</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="/image/mariage.jpg" alt="hello" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alexandre Vasileiadis</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="/image/mariage.jpg" alt="hello" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alexandre Vasileiadis</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="/image/mariage.jpg" alt="hello" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alexandre Vasileiadis</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="/image/mariage.jpg" alt="hello" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alexandre Vasileiadis</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
