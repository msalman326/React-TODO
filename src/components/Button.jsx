import PropTypes from 'prop-types';


const Button = ({text,color,onAdd}) => {

   
    
  return (
    
        <button onClick={onAdd} style={{backgroundColor:color}} className='btn'>{text}</button>

    
  )
}
Button.defaultProps={
    color:'Pink'
}
Button.propTypes={
text: PropTypes.string,
color: PropTypes.string,
onClick:PropTypes.func
}
export default Button