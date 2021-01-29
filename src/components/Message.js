export default function Message (props) {

  const { count } = props;

  let message = '';
  count === 0 && (message = 5 - count + ' away from Bingo!');
  count === 1 && (message = 5 - count + ' away from Bingo!');
  count === 2 && (message = 5 - count + ' away from Bingo!');
  count === 3 && (message = 5 - count + ' away from Bingo!');
  count === 4 && (message = 5 - count + ' away from Bingo!');
  count === 5 && (message = 'Yay! You are the winner!');

  return (
    <section className={`message ${count === 5 && ('bingo')}`}>
      <p>{message}</p>
    </section>
  )
}