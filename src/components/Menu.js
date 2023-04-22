import Sales from './Sales'
import Dish from './Dish'
import Drinks from './Drinks'
import Servings from './Servings'

function Menu(){
    return(
        <div>
            <h1>Menu</h1>
            <p> <Sales/> </p>
            <p> <Dish/> </p>
            <p> <Servings/> </p>
            <p> <Drinks/> </p>
        </div>
    )
    
}

export default Menu