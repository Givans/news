import React from 'react'
import './NewsItem.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';


const NewsItem = ({title, description, url, urlToImage, author, publishedAt, authorLink}) => {
  const imgNotFound = 'https://www.coolgenerator.com/Data/Textdesign/202301/0ecb89bce47e216e480e5e75078eebb1.png'

  return (
    
    <Col md={4}>
      <Card bg="transparent">
      <Card.Img variant="top" src={urlToImage} onError={e => {
          e.currentTarget.src = imgNotFound
        }} />
      <Card.Body>
        <Card.Title><a href={url} target="_blank" rel="noreferrer" style={{color: 'white'}}>{title}</a></Card.Title>
        <Card.Text className='text-white'>
          {/* {description.substring(0, 100)} {description.length >= 100 && '...'} */}
          {/* <br />
          <hr /> */}
          {/* <span style={{textAlign: 'center'}}><small><b style={{color: 'pink'}}>Author : </b> <a href={authorLink}> {author} </a></small></span> */}
          {/* <br/> */}
          <Row>
            <Col md={8}>
              {/* <span><small>{publishedAt.substring(0, 10)}</small></span> */}
              <span><small><b style={{color: 'pink'}}>Author : </b> <a style={{color: "white"}} href={authorLink}> {author} </a></small></span>
            </Col>
            <Col md={4}>
              {/* <span><small>{publishedAt.substring(11, 19)}</small></span> */}
              <span><small style={{color: "orange", textAlign: 'center'}}>{publishedAt}</small></span>
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