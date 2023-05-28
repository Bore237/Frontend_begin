import {plantList} from '../datas/plantList.js'
import '../style/ShoppingList.css'
import PlantItem from './PlantItem.js'

function ShoppingList ({cart, updateCart}){
	const categories = plantList.reduce((acc, plant) => 
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
       

    function addToCart(name, price){
        const currentPlantSaved = cart.find(((plant) => plant.name === name))
        if (currentPlantSaved){
            const cartFilteredCurrentPlant = cart.filter(
                ((plant) => plant.name !== name)
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
                updateCart([...cart, { name, price, amount: 1 }])
        }
    }


    return(
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => 
                    <li key={cat}>{cat}</li>
                )}          
            </ul>

            <ul className='lmg-plant-list'> 
                {plantList.map((plant) => (
                    <div key={plant.id}>
                        <PlantItem 
                            plant={plant}
                        />
                        <button onClick={() => addToCart(plant.name, plant.price)}>
                            Ajouter
                        </button>  
                    </div>         
                ))}
            </ul>
        </div>
    )
}


export default ShoppingList;