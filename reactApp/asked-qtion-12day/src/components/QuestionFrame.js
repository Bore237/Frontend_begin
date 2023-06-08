import '../style/QuestionFrame.css'
import { Icon } from '@iconify/react';

function QuestionFrame({reponse, question}){
    return(
        <div className='frame'>
            <div className='question'> 
                <h3>{question}</h3>
            </div>
            <div className='btn'>  
                <Icon icon="majesticons:chevron-down" color="gray" width="30" />
                {/* <Icon icon="carbon:close-filled" color="gray" width="30"/> */}
            </div>
            <div className='reponse'> <p> {reponse} </p></div>
        </div>         
    )
}

export default QuestionFrame