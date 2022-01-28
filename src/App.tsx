import React from 'react';
import './App.css';

function App() {
  //CSS in JS
  let App={
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItem: "center",
    justifyContent: "center"
  }
  let styleCard={
    width: "150px",
    height: "150px",
    borderRadius: "12px",
    border: "5px solid",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"20px",
    cursor:"grab"
  }
  //End CSS
//dataBd
let [cardList,setCardList]=React.useState([
  {Text: "Мама построила дом для нас",otvetText:"Mom built a house for us"},
  {Text: "Я поел картошку",otvetText:"i ate a potato"},
  {Text: "Я сломал мир",otvetText:"i broke the world"},
  {Text: "Программируй друг",otvetText:"Program a friend"},
  
])
let wordCheck=0;
let [currentCard,setCurrentCard]=React.useState("g")
//dataBdEnd
// logict dnd
function dragStartHandler(e: React.DragEvent<HTMLDivElement>,card: string){
  /*currentCard.id=card.id
  currentCard.order=card.order
  currentCard.Text=card.Text*/
  currentCard=card
  setCurrentCard(currentCard)
  
  
}
function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>){
  
}
function dragOverHandler(e: React.DragEvent<HTMLDivElement>){
  e.preventDefault()
 
}
function dragEndHandler(e: React.DragEvent<HTMLDivElement>){
  
}
function dropHandler(e: React.DragEvent<HTMLDivElement>,card: string){
  e.preventDefault()
  texstCard=texstCard.map(c=>{
    if(c===card){
      c=currentCard
      return c
    }
    if(c===currentCard){
      c=card
      return c
    }
    return c
  })

  setTextCard(texstCard)
  
  let rezulttext=cardList[0].otvetText.split(" ")
  console.log(rezulttext, texstCard)
  if(JSON.stringify(rezulttext)===JSON.stringify(texstCard)){
    alert("Победа")
  }
}
function shuffle(){
  wordCheck=Math.floor(Math.random() * cardList.length) + 0
	let j, temp;
  let arr=cardList[0].otvetText.split(" ")
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
  console.log(wordCheck)
	return arr;
}
//end logict dnd

let [texstCard,setTextCard]=React.useState(shuffle())

  return (
   /* <div style={App}>
      {cardList.map((card)=>{return(<div key={card.id} onDragStart={(e)=>dragStartHandler(e,card)} onDragLeave={(e)=>dragLeaveHandler(e)} onDragOver={(e)=>dragOverHandler(e)} onDragEnd={(e)=>dragEndHandler(e)} onDrop={(e)=>dropHandler(e,card)} draggable={true}  style={styleCard}>{card.Text}</div>)})}
    </div>*/
    <div style={App}>
      {texstCard.map(card=>{return(<div 
      key={card} 
        onDragStart={(e)=>dragStartHandler(e,card)} 
          onDragLeave={(e)=>dragLeaveHandler(e)} 
            onDragOver={(e)=>dragOverHandler(e)} 
              onDragEnd={(e)=>dragEndHandler(e)} 
                onDrop={(e)=>dropHandler(e,card)} 
                  draggable={true} style={styleCard}>
                    {card}
                      </div>)})}
      <div>
        {cardList[0].Text}
      </div>
      <div><button onClick={()=>setTextCard(shuffle())}>Сгенерировать другое слово</button></div>
    </div>
    
  );
}

export default App;
