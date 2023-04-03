import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
function Header({title,onAdd,showAdd}){
    const location = useLocation()
    // const onClick=(e)=>{
    //     console.log(e)
    // }
  return (
   
<header className=''>
    
    <div className='header'>
    <h3>{title} </h3>

    { location.pathname==='/'&&<Button   color={showAdd?'RED':'green'} text = {showAdd?'Close':'Add'} onAdd={onAdd}/>}
</div>
</header> 
 )
}
Header.defaultProps={
    title:' React-task-tracker',
    name: '           Jon deo'
}

Header.propTypes={

title: PropTypes.string.isRequired,
}
export default Header