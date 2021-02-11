import './Button.scss';
const classnames = require('classnames');

export default function Button (props) {

  const buttonClass = classnames(
    'button',
    {'button_next': props.next},
    {'button_history': props.history},
    {'button_disabled': props.disabled}
  )

  return (
    <button 
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
};