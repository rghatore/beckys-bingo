import './Status.scss';

export default function Status(props) {
  const { loading } = props;

  return (
    loading &&
    <div className="status_popup">
      <div className="status_position">
        <span className="status_content">
          <h1>Loading ... </h1>
          <img id="status" src="Status.png" alt="status"/>
        </span>
      </div>
    </div>
  )
}