import React, { useEffect, useState } from 'react';
import profilePicture from '../components/images/profile-picture.jpg';
import { db } from "../firebase"; // Assuming you've set up Firebase in a separate file
import { doc, getDoc } from "firebase/firestore";

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchUserById = async (id) => {
    const userDocRef = doc(db, 'users', id);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      return userDocSnapshot.data();
    } else {
      console.error(`No such user with id: ${id}`);
      return null;
    }
  };

  useEffect(() => {
    const teamMemberIds = ['Alexander', 'Roberta', 'Laura', 'Kunmi'];

    const fetchTeamMembers = async () => {
      const fetchedMembers = [];
      for (const id of teamMemberIds) {
        const member = await fetchUserById(id);
        if (member) {
          fetchedMembers.push(member);
        }
      }
      setTeamMembers(fetchedMembers);
    };

    fetchTeamMembers();
  }, []);
  return (
    <div>
      <div id="home-banner4" className="banner">
        <div className="container">
          <div className="header-text">
            <h1>
              Meet the Dream Team <br />
              Redefining Healthcare
            </h1>
          </div>
        </div>
      </div>

      <div id="mainContent" className="about-pg">
        <section id="team">
          <p>
            At LxRose, our team comprises a unique blend of experts passionate
            about changing lives. From tech-savvy engineers to healthcare
            specialists, we are united in our mission to bring the best of both
            worlds to your healthcare experience.
          </p>
        </section>

        {teamMembers.map((member, index) => (
          <section className="about-section" key={index}>
            <div className="profile-picture">
              <img src={member.imageUrl || profilePicture} alt="Profile" />
              <h1>{member.username}</h1>
            </div>
            <div className="about-text">
              <p>{member.description}</p> {/* Assuming 'description' field exists in your database */}
            </div>
          </section>
        ))}

        <section>
          <p>
            We are proud to have such a distinguished team of professionals at
            the forefront of health and innovation. Their collective expertise
            ensures not just superior care but also a vision for a healthier
            future.
          </p>
        </section>
      </div>
      <div id="home-banner5" className="banner">
        <div className="container">
          <div className="header-text"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
