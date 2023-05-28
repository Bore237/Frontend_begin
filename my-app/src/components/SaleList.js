import  '../style/SaleList.css/';
import { plantList } from '../datas/plantList';

function SaleList(){

    return(
        <div>
            <ul>
                <li> {plantList.map((plant) => plant.isSpecialOffer)}</li>
            </ul>
        </div>
    )
}

export default SaleList;

