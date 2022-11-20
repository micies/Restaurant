import { Button, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export function HomePage() {


  return (


    <div>
      <h1><Badge bg="success">ברוכים הבאים למסעדה</Badge>{' '}</h1>

      <Button size="lg" href='/diners' variant="primary" >סועדים</Button>{' '}
      <Button size="lg" href='/menu'>תפריט</Button>{' '}
      <Button size="lg" href="/tables">שולחנות</Button>{' '}
    </div>

  );
}

export default HomePage
