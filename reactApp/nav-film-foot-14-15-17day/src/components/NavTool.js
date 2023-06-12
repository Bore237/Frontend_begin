import '../style/Nav.css'

function NavTool(){

    return(
        <div className='nav-containt'>
            <div className='nav'> 
                <a href='#'>Home</a>
                <a href='#'>Works</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
                <div className='icon'>
                    <div className='ligne ligne1'></div>
                    <div className='ligne ligne2'></div>
                </div>
            </div>
            <form id="form">
                <input className='search' type='text' placeholder='Search'/> 
            </form>

        </div>
    )
}

export default NavTool;

