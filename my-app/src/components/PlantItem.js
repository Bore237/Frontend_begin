import CareScale  from "./CareScale"
import '../style/PlantItem.css'

function handleClick(plantNane){
    alert(`vous vulez 1 ${plantNane} ? Très bon choix`)
}

function PlantItem ({plant}){

    return(
        <li key={plant.id} className='lmj-plant-item' onClick={() => handleClick(plant.name)}>
            <img className='lmj-plant-item-cover' src={plant.cover} alt={`${plant.name} cover`} />
            <span>{plant.name} {plant.isSpecialOffer && <span className='lmj-sales'>Sale</span>} </span>

			<div>
				<CareScale careType='water' scaleValue={plant.water} />
				<CareScale  scaleValue={plant.light} careType='light'/>
                {plant.isBestSale && <span>🔥</span>}
            </div>
        </li>
    )
}

export default PlantItem;

