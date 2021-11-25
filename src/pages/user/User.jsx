import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">edit user</h1>
                <Link to="/newUser">
                    <button className="userAddButton">create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="/image/mariage.jpg" alt="" className="userShowTopImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowTopUsername">Alexandre Vasileiadis</span>
                            <span className="userShowTopUserTitle">React developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowBottomTitle">Acount Details</span>
                        <div className="userShowBottomInfo">
                            <PermIdentity className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">alexandre19</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <CalendarToday className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">20.05.2000</span>
                        </div>
                        <span className="userShowBottomTitle">Contact Details</span>
                        <div className="userShowBottomInfo">
                            <PhoneAndroid className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">+32 490 20 43 89</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <MailOutline className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">alexandre19@gmail.com</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <LocationSearching className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">Nivelles | Belgium</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className="userUpdateInput" placeholder='alexandre19' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" className="userUpdateInput" placeholder='Alexandre Vasileiadis' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" className="userUpdateInput" placeholder='alexandre19' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="email" className="userUpdateInput" placeholder='alexandre19@gmail.com' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className="userUpdateInput" placeholder='+32 490 20 43 89' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" className="userUpdateInput" placeholder='Nivelles | Belgium' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Date</label>
                                <input type="text" className="userUpdateInput" placeholder='20.05.2000' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateRightUpload">
                                <img src="/image/mariage.jpg" alt="" className="userUpdateRightImg" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateRightIcon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    className="userUpdateRightInput"
                                    style={{ display: "none" }}
                                />
                            </div>
                            <button className="userUpdateRightButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
