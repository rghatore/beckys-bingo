import { useState } from 'react';
import './History.scss';

export default function History(props) {
  const [show, setShow] = useState(true);
  
  const { history, displayHistory } = props

  let columns = [
    history.slice(0,5),
    history.slice(5,10),
    history.slice(10,15),
    history.slice(15,20),
    history.slice(20)
  ];

  const toggle = () => {
    setShow(false);
    setTimeout(() => {
      displayHistory();
    }, 1800)
  } 

  return (
    <div className={`history_slide ${show ? 'open' : 'close'}`}>
      <section className="history_content">
        {
          history.length === 0 && 
          <p className="history_empty">Uh oh, history is empty!</p>
        }
        {
          history.length > 0 &&
          <>
          <ol className="history_column">
            {columns[0].map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ol>
          <ol className="history_column" start="6">
            {columns[1].map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ol>
          <ol className="history_column" start="11">
            {columns[2].map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ol>
          <ol className="history_column" start="16">
            {columns[3].map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ol>
          <ol className="history_column" start="21">
            {columns[4].map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ol>
          </>
        }
      </section>
      <div className="hide" onClick={toggle}></div>
    </div>
  )
};