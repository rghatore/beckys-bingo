import './Grid.scss'
import { shuffle } from '../helpers/selectors';

export function Grid (props) {

  const { current, items } = props;
  let bingoItems = [];

  if (current === 'firstCategory' && items[0]) {
    shuffle(items[0]);
    bingoItems = items[0];
  } else if (current === 'secondCategory' && items[1]) {
    shuffle(items[1]);
    bingoItems = items[1];
  } else if (current === 'thirdCategory' && items[2]) {
    shuffle(items[2])
    bingoItems = items[2];
  }
  // (current === 'firstCategory' && items[0]) ? bingoItems = items[0] : "";

  console.log('DEBUGGING: ', bingoItems);

  return (
    <section className="grid">
      <table>
        <tbody>
          <tr>
            <td>{bingoItems[0]  ? bingoItems[0] : 'FREE'}</td>
            <td>{bingoItems[1]  ? bingoItems[1] : 'FREE'}</td>
            <td>{bingoItems[2]  ? bingoItems[2] : 'FREE'}</td>
            <td>{bingoItems[3]  ? bingoItems[3] : 'FREE'}</td>
            <td>{bingoItems[4]  ? bingoItems[4] : 'FREE'}</td>
          </tr>
          <tr>
            <td>{bingoItems[5]  ? bingoItems[5] : 'FREE'}</td>
            <td>{bingoItems[6]  ? bingoItems[6] : 'FREE'}</td>
            <td>{bingoItems[7]  ? bingoItems[7] : 'FREE'}</td>
            <td>{bingoItems[8]  ? bingoItems[8] : 'FREE'}</td>
            <td>{bingoItems[9]  ? bingoItems[9] : 'FREE'}</td>
          </tr>
          <tr>
            <td>{bingoItems[10] ? bingoItems[10] : 'FREE'}</td>
            <td>{bingoItems[11] ? bingoItems[11] : 'FREE'}</td>
            <td>{bingoItems[12] ? bingoItems[12] : 'FREE'}</td>
            <td>{bingoItems[13] ? bingoItems[13] : 'FREE'}</td>
            <td>{bingoItems[14] ? bingoItems[14] : 'FREE'}</td>
          </tr>
          <tr>
            <td>{bingoItems[15] ? bingoItems[15] : 'FREE'}</td>
            <td>{bingoItems[16] ? bingoItems[16] : 'FREE'}</td>
            <td>{bingoItems[17] ? bingoItems[17] : 'FREE'}</td>
            <td>{bingoItems[18] ? bingoItems[18] : 'FREE'}</td>
            <td>{bingoItems[19] ? bingoItems[19] : 'FREE'}</td>
          </tr>
          <tr>
            <td>{bingoItems[20] ? bingoItems[20] : 'FREE'}</td>
            <td>{bingoItems[21] ? bingoItems[21] : 'FREE'}</td>
            <td>{bingoItems[22] ? bingoItems[22] : 'FREE'}</td>
            <td>{bingoItems[23] ? bingoItems[23] : 'FREE'}</td>
            <td>{bingoItems[24] ? bingoItems[24] : 'FREE'}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}