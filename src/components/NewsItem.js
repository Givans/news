import React from 'react'
import './NewsItem.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';


const NewsItem = ({title, description, url, urlToImage, author, publishedAt}) => {
  const imgNotFound = 'https://www.coolgenerator.com/Data/Textdesign/202301/0ecb89bce47e216e480e5e75078eebb1.png'

  return (
    
    <Col md={4}>
      <Card bg="transparent" style={{border: '1px solid black'}}>
      <Card.Img variant="top" src={urlToImage} onError={e => {
          e.currentTarget.src = imgNotFound
        }} />
      <Card.Body>
        <Card.Title><a href={url} target="_blank" rel="noreferrer" style={{color: 'darkblue'}}>{title}</a></Card.Title>
        <Card.Text className='text-white'>
          {description.substring(0, 100)} {description.length >= 100 && '...'}
          <br />
          <hr />
          <span style={{textAlign: 'center'}}><small><b style={{color: 'pink'}}>Author : </b> {author} </small></span>
          <br/>
          <Row style={{color: "orange", textAlign: 'center'}}>
            <Col md={6}>
              <span><small>{publishedAt.substring(0, 10)}</small></span>
            </Col>
            <Col md={6}>
              <span><small>{publishedAt.substring(11, 19)}</small></span>
            </Col>
          </Row>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <br />
    </Col>

    // <div className='news-app'>
    //     <div className='news-item'>
    //         <img className='news-img' src={urlToImage} alt={urlToImage} />
    //         <h3><a href={url}>{title}</a></h3>
    //         <p>{description}</p>
    //     </div>
    // </div>
  )
}

export default NewsItem