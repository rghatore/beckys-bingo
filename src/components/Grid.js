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

  // add class to cell on click
  const selectCell = (event) => {
    const target = event.target;
    if (target.className === 'selected') {
      target.className = '';
    } else {
      target.className = 'selected';
    }
  }

  // currently, FREE cells are random - might change to fixed position
  return (
    <section className="grid">
      <table>
        <tbody onClick={(event) => selectCell(event)}>
          <tr>
            <td className={bingoItems[0] ? '' : 'selected'}>
              {bingoItems[0]  ? bingoItems[0] : 'FREE'}
            </td>
            <td className={bingoItems[1] ? '' : 'selected'}>
              {bingoItems[1]  ? bingoItems[1] : 'FREE'}
            </td>
            <td className={bingoItems[2] ? '' : 'selected'}>
              {bingoItems[2]  ? bingoItems[2] : 'FREE'}
            </td>
            <td className={bingoItems[3] ? '' : 'selected'}>
              {bingoItems[3]  ? bingoItems[3] : 'FREE'}
            </td>
            <td className={bingoItems[4] ? '' : 'selected'}>
              {bingoItems[4]  ? bingoItems[4] : 'FREE'}
            </td>
          </tr>
          <tr>
            <td className={bingoItems[5] ? '' : 'selected'}>
              {bingoItems[5]  ? bingoItems[5] : 'FREE'}
            </td>
            <td className={bingoItems[6] ? '' : 'selected'}>
              {bingoItems[6]  ? bingoItems[6] : 'FREE'}
            </td>
            <td className={bingoItems[7] ? '' : 'selected'}>
              {bingoItems[7]  ? bingoItems[7] : 'FREE'}
            </td>
            <td className={bingoItems[8] ? '' : 'selected'}>
              {bingoItems[8]  ? bingoItems[8] : 'FREE'}
            </td>
            <td className={bingoItems[9] ? '' : 'selected'}>
              {bingoItems[9]  ? bingoItems[9] : 'FREE'}
            </td>
          </tr>
          <tr>
            <td className={bingoItems[10] ? '' : 'selected'}>
              {bingoItems[10] ? bingoItems[10] : 'FREE'}
            </td>
            <td className={bingoItems[11] ? '' : 'selected'}>
              {bingoItems[11] ? bingoItems[11] : 'FREE'}
            </td>
            <td className={bingoItems[12] ? '' : 'selected'}>
              {bingoItems[12] ? bingoItems[12] : 'FREE'}
            </td>
            <td className={bingoItems[13] ? '' : 'selected'}>
              {bingoItems[13] ? bingoItems[13] : 'FREE'}
            </td>
            <td className={bingoItems[14] ? '' : 'selected'}>
              {bingoItems[14] ? bingoItems[14] : 'FREE'}
            </td>
          </tr>
          <tr>
            <td className={bingoItems[15] ? '' : 'selected'}>
              {bingoItems[15] ? bingoItems[15] : 'FREE'}
            </td>
            <td className={bingoItems[16] ? '' : 'selected'}>
              {bingoItems[16] ? bingoItems[16] : 'FREE'}
            </td>
            <td className={bingoItems[17] ? '' : 'selected'}>
              {bingoItems[17] ? bingoItems[17] : 'FREE'}
            </td>
            <td className={bingoItems[18] ? '' : 'selected'}>
              {bingoItems[18] ? bingoItems[18] : 'FREE'}
            </td>
            <td className={bingoItems[19] ? '' : 'selected'}>
              {bingoItems[19] ? bingoItems[19] : 'FREE'}
            </td>
          </tr>
          <tr>
            <td className={bingoItems[20] ? '' : 'selected'}>
              {bingoItems[20] ? bingoItems[20] : 'FREE'}
            </td>
            <td className={bingoItems[21] ? '' : 'selected'}>
              {bingoItems[21] ? bingoItems[21] : 'FREE'}
            </td>
            <td className={bingoItems[22] ? '' : 'selected'}>
              {bingoItems[22] ? bingoItems[22] : 'FREE'}
            </td>
            <td className={bingoItems[23] ? '' : 'selected'}>
              {bingoItems[23] ? bingoItems[23] : 'FREE'}
            </td>
            <td className={bingoItems[24] ? '' : 'selected'}>
              {bingoItems[24] ? bingoItems[24] : 'FREE'}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}