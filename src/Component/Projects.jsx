import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import bs from '../Assets/bs.jpeg';
//import ll from '../Assets/ll.png';
import arc from '../Assets/arc.jpeg';
import ai from "../Assets/ai.png";
import ru from "../Assets/ru.png";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSeeMoreClick = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const cards = [
    {
      id: 1,
      title: "Innersource",
      imageUrl: ru,
      shortDescription: "Reusable Components",
      longDescription: "A reusablity Idea \n for sustainable development in Airbus : Currently support node, java, react and python \nfor Multiple team to consume and contribute : To help achieve DIY developments.",
    },
    {
      id: 2,
      title: "Aircraft Data Management",
      imageUrl: arc,
      shortDescription: "AWS + React -> https://github.com/abhiscripts/LoginApp",
      longDescription: "A well authenticated Aircraft data noramlization app using AWS and React",
    },
    {
      id: 3,
      title: "AI Chat Bot",
      imageUrl: ai,
      shortDescription: "A ready to use and integrate bot with all G site APPs",
      longDescription: "A ready to use and integrate bot with all Google site apps is a pre-packaged chatbot solution that seamlessly interfaces with a wide range of Google applications and services, such as Gmail, Google Calendar, Google Drive, and more. This pre-built bot is immediately deployable, requiring minimal development effort, and offers a convenient and familiar user experience as it operates within the Google ecosystem. Users can engage with the chatbot through various mediums, including text and voice commands, enhancing productivity and automation of tasks. Additionally, customization options may be available to align the bot with specific user or business needs while ensuring data security, efficiency, and continuous updates for a reliable performance.",
    },
    {
      id: 4,
      title: "FE/ BE Bootstrapper",
      imageUrl: bs,
      shortDescription: "A ready to use bootstrapper project in FE BE to reduce development time",
      longDescription: "It refers to a readily available framework or template that serves as a starting point for front-end and back-end development, aiming to expedite the overall development process. This project provides pre-configured structures, components, and functionalities that can be easily integrated into the front-end and back-end systems, thereby minimizing the need for building these components from scratch. Developers can leverage this solution to accelerate the initial setup, streamline coding efforts, and facilitate rapid prototyping, ultimately enabling more efficient and time-effective development workflows.",
    },
  ];

  return (
    <div className="projects">
      <div className="projectHeader">
        <h2>Featured Innovations</h2>
      </div>
      <div className="cardContainer">
        {cards.map((card) => (
          <Card key={card.id} className="card">
            <CardMedia
              component="img"
              alt={card.title}
              height="200"
              image={card.imageUrl}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {card.shortDescription}
              </Typography>
              <Button color="primary" onClick={() => handleSeeMoreClick(card)}>
                See More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={open} onClose={handleCloseDialog}>
        {selectedCard && (
          <div>
            <DialogTitle>{selectedCard.title}</DialogTitle>
            <DialogContent>
              <Typography variant="body1">
                {selectedCard.longDescription}
              </Typography>
            </DialogContent>
          </div>
        )}
      </Dialog>
      <button
        className="moreProject"
        onClick={() => window.open("https://example.com", "_blank")}
      >
        More Projects ...
      </button>
    </div>
  );
};

export default Projects;
