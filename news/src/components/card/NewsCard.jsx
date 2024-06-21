import Card from "react-bootstrap/Card";
import "./NewsCard.css";
import { useNavigate } from "react-router-dom";

function NewsCard({ img, title, id }) {
  const navigate = useNavigate();
  return (
    <Card
      className="newsCard"
      style={{ width: "18rem" }}
      onClick={() => navigate(`/article/${id}`)}
    >
      <Card.Img
        variant="top"
        className="object-fit-cover"
        src={img === "None" ? "https://placehold.co/286x180" : img}
        height={200}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
