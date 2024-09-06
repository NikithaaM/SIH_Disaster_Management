import React from 'react';
import goonjLogo from '../images/Goonj.png';
import './Goonj.css'; // Import CSS for styling

const Goonj = () => {
  return (
    <div className="new-page">
      <header className="new-page-header">
        <h1>Goonj</h1>
        <img src={goonjLogo} alt="Goonj Logo" className="logo" />
      </header>
      <section className="introduction">
        <p>Goonj is a non-governmental organisation headquartered in New Delhi, India. It focuses on bringing equity and dignity between cities and villages using underutilized urban material, particularly cloth, as a tool for development.</p>
      </section>
      <section className="history">
        <h2>History</h2>
        <p>Founded in 1999 by Anshu Gupta, Goonj started with just 67 clothes and now deals with over 3500 tonnes of material every year. The organization was inspired by real-life incidents highlighting the need for clothing as a basic human right.</p>
      </section>
      <section className="initiatives">
        <h2>Initiatives</h2>
        <ul>
          <li><strong>Cloth for Work:</strong> Evolving two new currencies of development – material and labour, where villagers work on infrastructural improvements in exchange for material resources.</li>
          <li><strong>Not Just a Piece of Cloth:</strong> Providing affordable and biodegradable sanitary napkins made from waste cloth to women in villages and slums.</li>
          <li><strong>School to School:</strong> Promoting participation of children through the donation of old school supplies and creating school kits for village schools.</li>
        </ul>
      </section>
      <section className="campaigns">
        <h2>Campaigns</h2>
        <ul>
          <li><strong>Ek Jodi Kapda:</strong> A project to collect donated clothes in partnership with Whirlpool Corporation.</li>
          <li><strong>Joy of Exchange:</strong> A campaign with Pantaloons Fashion & Retail Limited to collect clothes.</li>
          <li><strong>Share the Language of Love:</strong> A joint effort with Johnson's Baby India to collect children's clothes, toys, and books.</li>
          <li><strong>Look Good Do Good:</strong> A program with Raymond offering custom tailoring services in exchange for old trousers.</li>
          <li><strong>Flood Relief:</strong> Engaged in relief activities for various floods, including the 2013 Uttarakhand floods and 2018 Kerala floods.</li>
        </ul>
      </section>
      <section className="awards">
        <h2>Awards</h2>
        <ul>
          <li>2004: Changemaker's Innovation Award for School to School initiative.</li>
          <li>2015: Ramon Magsaysay Award for Anshu Gupta.</li>
          <li>2012: NASA’s and US State Department’s award as a ‘Game Changing Innovation’.</li>
          <li>2018: AIMA Award to Anshu Gupta.</li>
        </ul>
      </section>
    </div>
  );
};

export default Goonj;




