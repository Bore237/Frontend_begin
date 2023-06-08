import '../style/QuestionFrame.css'
import{Iconfrom} from '@iconify/react'

function QuestionFrame({reponse, question, images, btn}){
    return(
        <li className=''> 
            <div className='frame'>
                <div className='question'> 
                    <h3>{question}</h3>
                </div>
                <div className='btn'>  
                    <Icon icon="carbon:close-filled" color="gray" />
                </div>
                <div className='reponse'> {reponse} </div>
            </div>         
        </li>
    )
}