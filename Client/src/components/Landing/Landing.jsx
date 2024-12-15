import {Row,Col,Card} from 'react-bootstrap';
import AdminLogin from '../../pages/AdminLoginPage';
import CandidateLogin from '../../pages/CandidateLoginPage';

function Landing() {
  return (
    <div>Landing
        
        <Card>
            <Row>
                <Col>
                    <AdminLogin/>
                </Col>
                <Col>
                    <CandidateLogin/>
                </Col>
            </Row>
        </Card>
       
    </div>
  )
}

export default Landing