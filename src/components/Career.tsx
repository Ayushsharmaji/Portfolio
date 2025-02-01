import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Support engineer</h4>
                <h5>Analytiq</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            I began my IT career as a tech support specialist, gaining hands-on experience and problem-solving skills. Eager to grow, I upgraded my skills and transitioned into web development. This journey reflects my passion for learning and adaptability, leading to my current role as a dedicated and skilled web developer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web developer</h4>
                <h5>Asktech</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            My IT career began in tech support, where I developed a strong foundation in problem-solving. After upgrading my skills, I transitioned into web development and gained 1 year of experience. I then joined a new company, contributing to diverse projects using React, JavaScript, and WordPress, showcasing my versatility and passion for innovation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>software engineer</h4>
                <h5>Grezpay</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            web Designer at Grezpay , brings 3 years of expertise to the table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
