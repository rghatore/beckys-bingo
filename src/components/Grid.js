import './Grid.scss'

export function Grid () {
  return (
    <section className="grid">
      <table>
        <tbody>
          <tr>
            <td>{'Hello'}</td>
            <td>{'this'}</td>
            <td className="free">{'FREE'}</td>
            <td>{'is'}</td>
            <td>{'table'}</td>
          </tr>
          <tr>
            <td>{'Hello'}</td>
            <td>{'this'}</td>
            <td className="free">{'FREE'}</td>
            <td>{'is'}</td>
            <td>{'table'}</td>
          </tr>
          <tr>
            <td className="free">{'FREE'}</td>
            <td className="free">{'FREE'}</td>
            <td className="free">{'FREE'}</td>
            <td className="free">{'FREE'}</td>
            <td className="free">{'FREE'}</td>
          </tr>
          <tr>
            <td>{'Hello'}</td>
            <td>{'this'}</td>
            <td className="free">{'FREE'}</td>
            <td>{'is'}</td>
            <td>{'table'}</td>
          </tr>
          <tr>
            <td>{'Hello'}</td>
            <td>{'this'}</td>
            <td className="free">{'FREE'}</td>
            <td>{'is'}</td>
            <td>{'table'}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}