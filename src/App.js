import {useState} from 'react';
import data from './data';
import slide from './slide';
import './App.css';

function App() {
  const [wish, setWish] = useState(data);
  const removeItem =(id)=>{
    let newWish = wish.filter(item=>item.id !==id);
    setWish(newWish);
  }
  const [picture, setPicture] =useState(0);
  const {image} = slide[picture];
  const previousPicture=()=>{
      setPicture((picture=>{
        picture --;
        if(picture<0){
          return slide.length-1;
        }
        return picture;
      }))
  }
  const nextPicture=()=>{
    setPicture((picture=>{
      picture ++;
      if (picture>slide.length-1){
        picture=0;
      }
      return picture;
    })) 
  }
  const [showText, setShowText] = useState(false);
  const showTextClick = (item)=>{
    item.showMore = !item.showMore
    setShowText(!showText)
  }
  return (
    <div >
      <div className='container'>
        <h1>MY BUCKET LIST</h1>
      </div>
      {wish.map((item=>{
        const{id, title, description, image, showMore} = item;
        return(<div className='gap' key ={id}>
          <div className='container'>
          <h2>{id} - {title}</h2>
          </div>
          <div className='container'>
          <p>
            {showMore?description:description.substring(0,100)+"..."}
            <button className="more" onClick={()=>showTextClick(item)}>
              {showMore?"Show less":"Show more"}
            </button>
          </p>
          </div>
          <div className='container'>
          <img src={image} alt="picture" width="400px"/>
          </div>
          <div className='container'>
          <button className='btn' onClick={()=>removeItem(id)}>DONE!</button>
          </div>
        </div>)
      }))}
      <div className='delete'>
      <button className='all' onClick={()=> setWish([])}>DELETE ALL</button> 
      </div>
      <div className='collage'>
        <div>
        <h2>HOW I SEE MY FUTURE</h2>
        </div>
        <div>
        <img className='future' src={image} alt="lake" width="300px"/>
        </div>
        <div>
        <button className='sld'onClick={previousPicture}>PREV</button>
        <button className='sld'onClick={nextPicture}>NEXT</button>
        </div>
      </div>
    </div>
    
    
  );
}
export default App;