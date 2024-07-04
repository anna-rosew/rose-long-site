import React from "react";
import "../styles/Qualifications.css";
import "../styles/About.css";
import kundaliniResearch from "../styles/imgs/icons/kundali-institute.svg";
import yogaInstitute from "../styles/imgs/icons/the-yoga-institute.svg";
import yogaAlliance from "../styles/imgs/icons/yoga-alliance.svg";
import { Link } from "react-router-dom";

export default function Qualifications() {
  return (
    <div className="Qualifications">
      <div className="container">
        <div className="heading-container">
          <h2>Training/</h2>
          <h1>Qualifications</h1>
        </div>
        <div className="credentials-container">
          <p>
            <p>
              2022: <strong>Exploring Metaphors with Clean Language,</strong>{" "}
              The Clean Coaching Centre
              <br />
              2022:{" "}
              <strong>
                Self Mastery Training level 2 with Kia Miller,
              </strong>{" "}
              Radiant Body Yoga
              <br />
              2021:{" "}
              <strong>Radiant Body Yoga Teacher Training, Level 2:</strong>{" "}
              Prana and Pranayama
              <br />
              2020: <strong>
                200 hr Yoga Teacher Training with Dr Kumar,
              </strong>{" "}
              Traditional Yoga certified by Yoga Alliance
              <br />
              2020:{" "}
              <strong>
                Family Constellations & the Chakras with Delcia McNeil,
              </strong>{" "}
              certified by the Association for Therapeutic Healers
              <br />
              2019:{" "}
              <strong>
                Coming Back to our Five Senses; the path of self enquiry.
              </strong>{" "}
              5 day intensive with Donna Farhi
              <br />
              2018: <strong>Chakra Psychology with Delcia McNeil,</strong>{" "}
              certified by the Association for Therapeutic Healers
              <br />
              2017 & 2018:{" "}
              <strong>
                Capacitar Training in Healing Trauma through Somatic Practice
                with Dr Patricia Cane
              </strong>
              <br />
              2017:{" "}
              <strong>
                Trained as Certified Recovery Coach at The Addiction Academy
              </strong>
              <br />
              2017: <strong>Meditation Teacher Training,</strong> certified by
              Traditional Yoga, UK
              <br />
              2016-2017:{" "}
              <strong>Yoga Teacher Training: Foundations Level 2,</strong>{" "}
              certified by British Wheel of Yoga
              <br />
              2015:{" "}
              <strong>
                Yoga Teacher Training for Mastering the Addictive Personality
                with Carolyn Cowan, Kundalini Global,
              </strong>{" "}
              certified by Yoga Alliance
              <br />
              2015:{" "}
              <strong>
                Trained Facilitator in Psychometric Testing at Metis
              </strong>
              <br />
              2015:{" "}
              <strong>
                Trained Facilitator of the Strategy Spring Board by Thompson
                Best
              </strong>
              <br />
              2014-2016:{" "}
              <strong>
                200hr Kundalini Yoga Teacher Training with Sada Sat Singh,
              </strong>{" "}
              certified by the Kundalini Research Institute
              <br />
              2013-2014:{" "}
              <strong>
                Health Coach Training, Institute of Integrative Nutrition,
              </strong>{" "}
              certified by International Assoc for Health Coaches
              <br />
              2004-2006:{" "}
              <strong>
                Self Expression and Leadership Coach Training, Landmark
                Education
              </strong>
              <br />
              1999: <strong>The Global Trainer Training; VSO</strong>
              <br />
              1993-1994:{" "}
              <strong>
                Post Graduate Certificate of Education, Religious Studies,
                University College London
              </strong>
              <br />
              1990-1993:{" "}
              <strong>
                BA Hons in Comparative Religion, 2:1, Manchester University
              </strong>
            </p>
          </p>
        </div>
        <div className="grid institution-icons-grid">
          <a href="https://kundaliniresearchinstitute.org/en/">
            <img
              src={kundaliniResearch}
              alt="Kundalinini Research Institute"
            ></img>
          </a>
          <a href="https://theyogainstitute.org/">
            <img src={yogaInstitute} alt="The Yoga Institute" />
          </a>
          <a href="https://www.yogaalliance.org/">
            <img src={yogaAlliance} alt="The Yoga Alliance" />
          </a>
        </div>
        <div className="qualification-button-container">
          <Link to="/blog" className="about-buttons">
            Blog
          </Link>
          <Link to="/work" className="about-buttons">
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
