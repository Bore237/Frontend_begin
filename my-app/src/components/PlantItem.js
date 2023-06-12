import CareScale  from "./CareScale"
import '../style/PlantItem.css'

function handleClick(plantNane){
    alert(`vous voulez 1 ${plantNane} ? Très bon choix`)
}

function PlantItem ({id, cover, name, water, light, price}){

    return(
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />

			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale  scaleValue={light} careType='light'/>
                {/* {plant.isBestSale && <span>🔥</span>} */}
            </div>
        </li>
    )
}

export default PlantItem;

