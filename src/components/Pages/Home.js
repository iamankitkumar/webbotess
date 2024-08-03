import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = (buttonValue) => {
    // Define your routes based on button values
    const routes = {
      MCA: "/mca",
      MMS: "/mms",
      "Data Science": "/data-science",
      Cybersecurity: "/cybersecurity",
      "Web Dev": "/web-dev",
      "AI & ML": "/ai-ml",
     "BSC(CS)":"/bsc-cs"
    };

    // Navigate to the route based on button value
    const route = routes[buttonValue];
    if (route) {
      navigate(route);
    } else {
      console.error("No route defined for button value:", buttonValue);
    }
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch("http://localhost:3001/Course-card");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <div> 
      <h1>Courses</h1>
      <ul className="cards">
        {courses.length === 0 ? (
          <p>Loading...</p>
        ) : (
          courses.map((course, index) => (
            <li key={index} className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{course.title}</h2>
                  <p className="card_text">{course.description}</p>
                  <button
                    className="btn card_btn"
                    onClick={() => handleButtonClick(course.button)}
                  >
                    {course.button}
                  </button>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
