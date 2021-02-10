import './Button.scss';
const classnames = require('classnames');

export default function Button (props) {

  const buttonClass = classnames(
    'button',
    {'button_next': props.next},
    {'button_history': props.history}
  )

  return (
    <button 
      className={buttonClass}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
};