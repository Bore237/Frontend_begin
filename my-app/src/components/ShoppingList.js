import {plantList} from '../datas/plantList.js'
import '../style/ShoppingList.css'
import PlantItem from './PlantItem.js'

function ShoppingList (){
	const categories = plantList.reduce((acc, plant) => 
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
       
    console.log(categories)
    return(
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => 
                    <li key={cat}>{cat}</li>
                )}          
            </ul>

            <ul className='lmg-plant-list'> 
                {plantList.map((plant) => (
                    <PlantItem 
                        plant={plant}
                    />            
                ))}
            </ul>
        </div>
    )
}


export default ShoppingList;