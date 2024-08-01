import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const mcaPage = () => {
    navigate("/mca");
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch('http://localhost:3001/Course-card');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching course data:', error);
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
                  <button className="btn card_btn" onClick={mcaPage}>MCA</button>
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
