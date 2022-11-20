import { Button, Badge} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

import Spinner from 'react-bootstrap/Spinner';

// import image from './12.jpg'

export function HomePage() {


  return (
<>


  <div className="hero-image">

    <h1><Badge bg="success">ברוכים הבאים למסעדה</Badge>{' '}</h1>


  {/* <Button size="lg" href='/diners' variant="secondary" >סועדים</Button>{' '} */}
  <Button size="lg" href='/diners' variant="primary" >סועדים</Button>{' '}
  <Button size="lg" href="/dinersClass">סועדים class</Button>{' '}
  <Button size="lg" href='/menu'>תפריט</Button>{' '}
  <Button size="lg" href="/tables">שולחנות</Button>{' '}
  






  </div>
  




  </>


  
  );
}

export default HomePage
