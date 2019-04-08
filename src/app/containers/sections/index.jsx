import React from "react";

import Section from "../../components/section";

import "./sections.scss";

const Sections = props => {
  const sections = [
    {
      id: 1,
      name: "eye",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "ear",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "eye",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "eye",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "eye",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="sections">
      <div className="title">Specialities</div>
      <div className="specialities">{list_sections(sections)}</div>
    </div>
  );
};

const list_sections = list => {
  return list.map(section => <Section {...section} key={section.id} />);
};

export default Sections;
