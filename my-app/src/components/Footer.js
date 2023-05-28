import { useState } from "react";
import '../style/Footer.css'


function Footer(){
    const [inputValueEmail, setInputValueEmail] = useState('')
    const [inputValueMessage, setInputValueMessage] = useState('')

    function handleInput(e) {
        setInputValueEmail(e.target.value)
        e.stopPropagation();
    }
    
    function handleBlur() {
        if (!inputValueEmail.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return(
        <footer clasName='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>

            <div className=".lmj-footer-elem"> 
                <label for="adress"> Entrer votre adress email </label>
                <input 
                    type="text"
                    name="adress"  
                    placeholder='Entrer votre mail'
                    value={inputValueEmail}
                    onBlur={handleBlur}
                    onChange={handleInput}
                /> 
                
                <br/> <br/>
                <label for="message"> Entrer votre requette </label>
                <textarea name="message"
                    placeholder="Entrer votre message"
                    value={inputValueMessage}
                    onChange={(e) => setInputValueMessage(e.target.value)}
                />
                <br/>
                <button style={{
                        position: 'absolute',
                        left:50,
                        margin: 15,
                    }}
                    onClick={() => alert(inputValueMessage)} > Alertez moi 🚨</button>
            </div>
        </footer>
    )
}

export default Footer