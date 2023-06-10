import '../style/QuestionFrame.css'
import { Icon } from '@iconify/react';
import { useState } from 'react';

function displayResp(id, isOpen){
    const frame = document.getElementById(`frame${id}`);
    const response = frame.querySelector('.reponse');
    if(isOpen){ 
        response.classList.add('show');
        frame.classList.add('show');
    }else{
        response.classList.remove('show');
        frame.classList.remove('show');
    }
}

function QuestionFrame({reponse, question, id}){
    const [isOpen, setIsOpen] = useState(false);
    const [icone, setIcone] = useState("majesticons:chevron-down");


    return(
        <div className='frame' id={'frame'+id}>
            <div className='question'> 
                <h3>{question}</h3>
            </div>
            <div className='btn' 
                onClick={() =>  {  
                if(isOpen){
                    displayResp(id, isOpen);
                    setIcone("carbon:close-filled");
                    setIsOpen(false);
                }else{ 
                    displayResp(id, isOpen);
                    setIcone("majesticons:chevron-down");
                    setIsOpen(true);
                }}
            }>
                <Icon icon={icone} color="gray" width="30" />
            </div>
            <div className='reponse'> <p> {reponse} </p></div>
        </div>         
    )
}

export default QuestionFrame