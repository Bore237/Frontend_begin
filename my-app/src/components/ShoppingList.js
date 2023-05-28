import {plantList} from '../datas/plantList.js'
import '../style/ShoppingList.css'

function ShoppingList (){
	const categories = plantList.reduce((acc, plant) => 
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
       
    console.log(categories)
    return(
        <div>
            <ul>
                {categories.map((cat) => 
                    <li key={cat}>{cat}</li>
                )}          
            </ul>

            <ul className='lmg-plant-list'> 
                {plantList.map((plant) => {
                    return <li key={plant.id} className='lmj-plant-item'> 
                            {plant.isBestSale && <span>🔥</span>}
                            {plant.name}: 
                            {plant.isSpecialOffer&& <div className='lmj-sales'>Soldes</div>}
                        </li>
                })}
            </ul>
        </div>
    )
}


export default ShoppingList;