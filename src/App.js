import { Children, useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
  const[curOpen, setCurOpen] = useState(1);

  return(
    <div>
      <ul>{data.map((i,e) => 
        <AccordionComponent curOpen={curOpen} onCurOpen={setCurOpen} title={i.title} num={e}>
          {i.text} 
        </AccordionComponent>)}</ul>
    </div>
  )
}


function AccordionComponent({curOpen, onCurOpen, title, num, children }){
  const isOpened = curOpen === num;
  
  function handleOnClick(){
    onCurOpen(isOpened ? null : num)
  }
  
  return(
    <div className={`item ${isOpened ? 'open': ''}`} onClick={handleOnClick}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className='title'>{title}</p>
      <p className="icon">{isOpened ? "-" : "+"}</p>
      {isOpened && <p className="content-box">{children}</p>}
    </div>
  )
}f3