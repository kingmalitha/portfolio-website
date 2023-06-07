import React from "react";

const arrayProjects = [
  {
    id: 1,
    title: "Project 1",
    image:
      "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=",
  },
  {
    id: 2,
    title: "Project 2",
    image:
      "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=",
  },
  {
    id: 3,
    title: "Project 3",
    image:
      "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=",
  },
  {
    id: 4,
    title: "Project 4",
    image:
      "https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=",
  },
  {
    id: 5,
    title: "Project 5",
    image:
      "https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=",
  },
];

const Portfolio = () => {
  return (
    <div className="container">
      <div className="relative z-0 h-screen overflow-hidden pointer-events-none">
        {arrayProjects.map((project) => (
          <div key={project.id} className=""></div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
