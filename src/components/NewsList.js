import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import NewsItem from './NewsItem'
import Row from 'react-bootstrap/Row';
import Container  from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';


const NewsList = ({searchContent}) => {
    const[articles, setArticles] = useState([])
    const [isLoading, setLoading]=useState(false);
    var search = searchContent
    const new_search = search.replace(/ /g, '%20')
    

    useEffect (() => {
      const options = {
        method: 'GET',
        url: 'https://kenyan-news-api.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Key': 'Your API KEY',
          'X-RapidAPI-Host': 'kenyan-news-api.p.rapidapi.com'
        }
      };

      setLoading(true);
      const getArticles = async () => {

   
          axios.request(options).then(function (response) {
            setArticles(response.data)
            setLoading(false);
          }).catch(function (error) {
            console.error(error);
          });
      }
      getArticles()
    }, [new_search])
  return (
    isLoading ? <Spinner /> :

    <Container style = {{border:" 1px solid white", marginTop: "50px", backgroundColor: "#555"}}>
      <br />
      <Row>
        {articles.map(article => {
          // console.log(article);
          return (
            <NewsItem 
              title={article.title}
              authorLink={article.authorLink}
              url={article.url}
              urlToImage={article.imgUrl}
              author={article.author}
              publishedAt={article.publisedAt}
              description={"news"}

            />
          )
        })}
      </Row>
    </Container>
  )
}

export default NewsList
