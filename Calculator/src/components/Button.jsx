import './Button.css'

function Button({ children, onClick, className = '' }) {
  return (
    <button 
      className={`calc-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button