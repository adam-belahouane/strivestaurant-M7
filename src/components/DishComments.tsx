import ListGroup from 'react-bootstrap/ListGroup'
import IDetails from '../interfaces/Details'


const DishComments = ({selectedDish} : {selectedDish : IDetails | null}) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
