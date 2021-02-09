export default function Message (props) {

  const { count, message } = props;

  return (
    <section className={`message ${count === 5 && ('bingo')}`}>
      <p>{message}</p>
    </section>
  )
}