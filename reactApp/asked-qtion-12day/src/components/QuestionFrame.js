import '../style/QuestionFrame.css'
import { Icon } from '@iconify/react';

function displayResp(id){
    const response = document.getElementById(`resp${id}`);
    const element = document.querySelector(`[key="${id}"]`);
    const frame = element.getAttribute('.frame');
    response.classList.add('show');
    frame.classList.add('show');
}


function QuestionFrame({reponse, question, id}){

    return(
        <div className='frame' key={id}>
            <div className='question'> 
                <h3>{question}</h3>
            </div>
            <div className='btn' onClick={() => displayResp(id)}>  
                <Icon icon="majesticons:chevron-down" color="gray" width="30" />
                {/* <Icon icon="carbon:close-filled" color="gray" width="30"/> */}
            </div>
            <div className='reponse' id={'resp'+id}> <p> {reponse} </p></div>
        </div>         
    )
}

export default QuestionFrame