import './Bingo.scss';

export default function Bingo (props) {

  const { bingo, reset } = props;

  return (
    bingo &&
    <div className="modal_popup" onClick={() => reset()}>
      <div className="modal_position">
        <span className="modal_content">
          <h1>Bingo!</h1>
          <img id="raccoon" src="Raccoon.png" alt="raccoon"/>
        </span>
      </div>
    </div>
  )
};