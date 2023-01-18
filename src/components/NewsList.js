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
    // console.log(new_search);
    // const options = {
    //   method: 'GET',
    //   url: 'https://kenyan-news-api.p.rapidapi.com/news',
    //   headers: {
    //     'X-RapidAPI-Key': '3b37ddd0c7mshfcd7b9d7326c2d7p1a4a40jsnededa604a3c1',
    //     'X-RapidAPI-Host': 'kenyan-news-api.p.rapidapi.com'
    //   }
    // };

    useEffect (() => {
      const options = {
        method: 'GET',
        url: 'https://kenyan-news-api.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Key': '3b37ddd0c7mshfcd7b9d7326c2d7p1a4a40jsnededa604a3c1',
          'X-RapidAPI-Host': 'kenyan-news-api.p.rapidapi.com'
        }
      };

      setLoading(true);
      const getArticles = async () => {

          // mediastack
          // const response = axios.get('http://api.mediastack.com/v1/news?access_key=bf3151e1eef6cba16d1a097d5afc1795&languages=en,-de')
          // // news api
          // // const response = axios.get("https://newsapi.org/v2/everything?q="+new_search+"&apiKey=2d9beffec7d04dc3ada87fca1c4cc6dd")
          // console.log(response);
          // setArticles((await response).data.data)
          // setLoading(false);
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