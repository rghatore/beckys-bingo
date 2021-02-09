import './Bingo.scss';

export default function Bingo (props) {

  const { bingo, reset } = props;

  return (
    bingo &&
    <div className="modal_popup" onClick={() => reset()}>
      <div className="modal_position">
        <span className="modal_content">
          <h1>Bingo!</h1>
          <img id="image_bingo" src="images/kallen/Mario_bingo.png" alt="mario"/>
        </span>
      </div>
    </div>
  )
};