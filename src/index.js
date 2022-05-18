
import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import logo from'./images/logo2.png';
function Component()
{
    const [quote,setquote]=useState('');
    const [author,setauthor]=useState('');
    const [bgcolor,setbgcolor]=useState("");
    useEffect(()=>{getQuote()},[])
    const getQuote= ()=>{
        let url='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    fetch(url)
     .then(res=>res.json())
     .then(data=>{
         let datas=data.quotes;
         let randomNum=Math.floor(Math.random()*(datas.length));
         const Quote=datas[randomNum];
         setquote(Quote.quote);
         setauthor(Quote.author);
    });
    var colors = [
        '#2f4f4f',
        '#704241',
        '#b22222',
        '#a3a300',
        '#242400',
        '#008a8a',
        '#008b8b',
        '#191970',
        '#000042',
        '#967117',
        '#047566',
        '#1a4503'
      ];
      var colorR=Math.floor(Math.random()*(colors.length));
      setbgcolor(colors[colorR]);
    }
    const handleClick =()=>{
        getQuote();
    }
    return(
        <>
        <div id="body" style={{backgroundColor:bgcolor}}>
            <div id="quote-box" style={{color:bgcolor}}>
       <div id="text">"{quote}"</div>
       <div id="author" className="md-col-4">-{author}</div>
       <a href={`https://twitter.com/intent/tweet?text=${quote}--${author}`} id="tweet-quote"><img src={logo}></img></a>
       <button id="new-quote"className="btn btn-default" style={{backgroundColor:bgcolor}}onClick={handleClick}>New Quote</button>
       
       </div>
    </div>
    </>
    )
    
}
    ReactDOM.render(<Component/>,document.getElementById("root"));