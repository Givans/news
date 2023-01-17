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
    console.log(new_search);


    useEffect (() => {

      setLoading(true);
      const getArticles = async () => {

          // mediastack
          // const response = axios.get('http://api.mediastack.com/v1/news?access_key=bf3151e1eef6cba16d1a097d5afc1795')
          // news api
          const response = axios.get("https://newsapi.org/v2/everything?q="+new_search+"&apiKey=2d9beffec7d04dc3ada87fca1c4cc6dd")
          setArticles((await response).data.articles)
          setLoading(false);
      }
      getArticles()
    }, [searchContent])
  return (
    isLoading ? <Spinner /> :

    <Container style = {{border:" 1px solid white", marginTop: "50px", backgroundColor: "#555"}}>
      <br />
      <Row>
        {articles.map(article => {
          return (
            <NewsItem 
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              author={article.author}
              publishedAt={article.publishedAt}
            />
          )
        })}
      </Row>
    </Container>
  )
}

export default NewsList