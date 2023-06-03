import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import curr from '../Assets/curr.png';
import ll from '../Assets/ll.png';
import arc from '../Assets/arc.jpeg';
import fd from "../Assets/fd.png";

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
      title: "Food Delivery MERN",
      imageUrl: fd,
      shortDescription: "https://github.com/abhiscripts/FoodDeliveryTask",
      longDescription: "MERN full stack app \n for backend service to start : from the backend directory run npm install and then npm run dev in your terminal. \nfor frontend service to start : from the frontend directory run npm install and then run npm start in your terminal. in frontend you have [user login, user signup and admin login] Once you do user signup you will be able to do user login with your user credentials.",
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
      title: "Currency Coverter",
      imageUrl: curr,
      shortDescription: "React + Hooks -> https://github.com/abhiscripts/react_redux_hooks_ex",
      longDescription: "Web Page -> https://compassionate-dubinsky-0e2353.netlify.app/",
    },
    {
      id: 4,
      title: "Little Lemon restaurant",
      imageUrl: ll,
      shortDescription: "CSS + JS + HTML -> https://github.com/abhiscripts/LittleLemonWeb",
      longDescription: "WebPage -> https://abhiscripts.github.io/LittleLemonWeb/",
    },
  ];

  return (
    <div className="projects">
      <div className="projectHeader">
        <h2>Featured Projects</h2>
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
