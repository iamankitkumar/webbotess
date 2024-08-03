import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div>
                <div className="footer-section">
                    <div className="footer-container">
                        <div className="ft-info">
                            <div className="ft-info-p1">
                                <p className="ft-title">
                                    Notes <span className="ft-sign">+</span>
                                </p>
                                <p className="ft-description">
                                    we believe in making note-taking as efficient and intuitive as
                                    possible. Whether you’re a student,
                                    professional, or anyone with a busy life, our platform is
                                    designed to help you organize your thoughts, manage your tasks,
                                    and boost your productivity.
                                </p>
                            </div>


                        </div>

                        <div className="ft-list">
                            <p className="ft-list-title">Services</p>
                            <ul className="ft-list-items">
                                <li>
                                    <a href="#services">Emergency Care</a>
                                </li>
                                <li>
                                    <a href="#services">Heart Disease</a>
                                </li>
                                <li>
                                    <a href="#services">Dental Care</a>
                                </li>
                                <li>
                                    <a href="#services">Prescription</a>
                                </li>
                                <li>
                                    <a href="#services">Insights for doctors</a>
                                </li>
                            </ul>
                        </div>

                        <div className="ft-list">
                            <p className="ft-list-title">Legal</p>
                            <ul className="ft-list-items">
                                <li>
                                    <Link to={"/mca"}>General Info</Link>
                                </li>
                                <li>
                                    <Link to={"/mms"}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to={"/legal"}>Terms of Services</Link>
                                </li>
                                <li>
                                    <Link to={"/legal"}>Consultations</Link>
                                </li>
                                <li>
                                    <Link to={"/legal"}>How it Works</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="ft-list" id="contact">
                            <p className="ft-list-title">Talk To Us</p>
                            <ul className="ft-list-items">
                                <li>
                                    <a href="mailto:support@healthplus.com">support@healthplus.com</a>
                                </li>
                                <li>
                                    <a href="mailto:appointment@healthplus.com">
                                        appointment@healthplus.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+022 5454 5252">+022 5454 5252</a>
                                </li>
                                <li>
                                    <a href="tel:+022 2326 6232">+022 2326 6232</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="ft-copyright">
                        <p>© 2013-2023 Health+. All rights reserved.</p>

                        <ul className="ft-social-links">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/dhananjay-gupta-661078239/"
                                    title="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/dh________jay/?next=%2F"
                                    title="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.github.com/"
                                    title="Github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer