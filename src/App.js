import React from 'react';
import DoubleClick from './assets/DoubleClick.svg'
import User_add from './assets/User_add.svg'
import Home from './assets/Home.svg'
import Filter from './assets/Filter.svg'
import Search from './assets/Search.svg'
import Profile_pic from './assets/Profile_pic.jfif'
import './App.css'

function App() {

    function demo() {
        alert("This is a dummy application!");
    }
    function demo1() {
        alert("You can find more people here!");
    }
    function sett() {
        alert("Your Personal Information");
    }
    return (
        <div className="app">
            
            <aside>
            <div className='over'>
                <header>
                    <div className="avatar-component">
                        <img
                            className="avatar" 
                            onClick={sett}
                            src={Profile_pic}
                            alt=""
                        />
                        <h4 className="media" >Diana</h4>
                    </div>
                </header>

                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt="" />
                        </div>

                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Sarah</h3>
                                <span className="time-mark">11:45pm</span>

                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Hey..</span>
                                <span className='pendings'>&#x2022; </span>
                                
                            </div>
                        </div>

                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Michael</h3>
                                <span className="time-mark">11:45 pm</span>

                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />

                                <span className="text">Ready. </span>
                                <span className='pending'>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">James</h3>
                                <span className="time-mark">10:30 pm</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Sent?</span>
                                <span className='pendings'>&#x2022; </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Jessica</h3>
                                <span className="time-mark">10:00 pm</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">How's you?</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">John</h3>
                                <span className="time-mark">9:00 pm</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Good!</span>
                                <span className='pending'>  2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Smith</h3>
                                <span className="time-mark">8:00 pm</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text"> dolor</span>
                                <span className='pendings'>&#x2022; </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Neighbour</h3>
                                <span className="time-mark">01/09/2015</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Waoo</span>
                                <span className='pending'>1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Junior</h3>
                                <span className="time-mark">01/01/2022</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">manager</h3>
                                <span className="time-mark">01/09/2020</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Pranjal</h3>
                                <span className="time-mark">01/07/2020</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Senior manager</h3>
                                <span className="time-mark">01/09/2019</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Senior manager</h3>
                                <span className="time-mark">01/09/2027</span>
                            </div>
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src={Profile_pic}
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Sarah</h3>
                                <span className="time-mark">01/09/2016</span>
                            </div>
                            
                            <div className="last-msg">
                                <img src={DoubleClick} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="addd">
                                <img
                                    className="add"
                                    src={User_add}
                                    alt=""
                                    onClick={demo1}
                                />

                            </div>
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                    <div className="icon-bar">
                        <a onClick={demo} href="/"><img className="home" src={Home} alt=''></img></a>
                        <a onClick={demo} href="/"><img className="filter" src={Filter} alt=''></img></a>
                        <a onClick={demo} href="/"><img className="searchicon" src={Search} alt=''></img></a>
                    </div>
                </div>
            </aside>
            {/* <main>
                <header>
                    <div className="avatar-component">
                        <img
                            className="avatar"
                            src={Profile_pic}
                            alt=""
                        />

                        <h3 className="avatar-title">Sofia</h3>
                    </div>
                </header>
                <div className="chat-input-box">
                    <div className="chat-input">
                        <input type="text" placeholder="Type a message" />
                    </div>
                </div>
            </main> */}
        </div>
    )
}

export default App
