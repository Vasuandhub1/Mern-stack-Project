import React from "react";
import Layout from "../components/Layout/Layout";
import aboutImage from "../images/About.png"; 

const About = () => {
  return (
    <Layout title="About Us">
      <div className="about-container">
        <div className="about-card">
          <div className="about-info">
            <h1>
            <br /><br />👕 About Our Brand</h1>
            <p className="about-desc">
              Welcome to <strong>Customized T-Shirt ECommerce</strong> – your one-stop destination for personalized fashion!
              <br />
              We specialize in <strong>customized T-shirts</strong>, allowing you to design and wear unique, high-quality apparel. 🎨✨
            </p>
            <p>
              Our mission is to provide <strong>premium quality, creative freedom, and exceptional customer service</strong> to fashion lovers worldwide.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
