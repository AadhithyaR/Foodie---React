import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

const MealCards = () => {
  return (
    <div>
      <Container className="meal-cards" >
        <Card className="card-responsive">
          <Card.Img
            variant="top"
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/dijon_mustard_roast_23740_16x9.jpg"
          />
          <Card.Body>
            <Card.Title>Chicken Mandi</Card.Title>
            <Card.Text>
              Category : Chicken
            </Card.Text>

            <Stack direction="horizontal" gap={3}>
              <Button variant="primary">View Details</Button>
              <Button variant="warning">Order Now</Button>
              <Button variant="link">Learn More</Button>
            </Stack>
          </Card.Body>
        </Card>

         <Card className="card-responsive">
          <Card.Img
            variant="top"
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/dijon_mustard_roast_23740_16x9.jpg"
          />
          <Card.Body>
            <Card.Title>Chicken Mandi</Card.Title>
            <Card.Text>
              Category : Chicken
            </Card.Text>

            <Stack direction="horizontal" gap={3}>
              <Button variant="primary">View Details</Button>
              <Button variant="warning">Order Now</Button>
              <Button variant="link">Learn More</Button>
            </Stack>
          </Card.Body>
        </Card>

        <Card className="card-responsive">
          <Card.Img
            variant="top"
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/dijon_mustard_roast_23740_16x9.jpg"
          />
          <Card.Body>
            <Card.Title>French Fries</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <Stack direction="horizontal" gap={3}>
              <Button variant="primary">View Details</Button>
              <Button variant="warning">Order Now</Button>
              <Button variant="link">Learn More</Button>
            </Stack>
          </Card.Body>
        </Card>

      </Container>

       <Container className="meal-cards">
        <Card className="card-responsive">
          <Card.Img
            variant="top"
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/dijon_mustard_roast_23740_16x9.jpg"
          />
          <Card.Body>
            <Card.Title>French Fries</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <Stack direction="horizontal" gap={3}>
              <Button variant="primary">View Details</Button>
              <Button variant="warning">Order Now</Button>
              <Button variant="link">Learn More</Button>
            </Stack>
          </Card.Body>
        </Card>

         <Card className="card-responsive">
          <Card.Img
            variant="top"
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/dijon_mustard_roast_23740_16x9.jpg"
          />
          <Card.Body>
            <Card.Title>French Fries</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <Stack direction="horizontal" gap={3}>
              <Button variant="primary">View Details</Button>
              <Button variant="warning">Order Now</Button>
              <Button variant="link">Learn More</Button>
            </Stack>
          </Card.Body>
        </Card>

        <Card className="card-responsive">
          <Card.Img
            variant="top"
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/dijon_mustard_roast_23740_16x9.jpg"
          />
          <Card.Body>
            <Card.Title>French Fries</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <Stack direction="horizontal" gap={3}>
              <Button variant="primary">View Details</Button>
              <Button variant="warning">Order Now</Button>
              <Button variant="link">Learn More</Button>
            </Stack>
          </Card.Body>
        </Card>

      </Container>
    </div>
  );
};

export default MealCards;
