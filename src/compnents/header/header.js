import React, {useEffect} from 'react';
import st from './header.module.css';
import {useLocation} from 'react-router-dom';

const Header = () =>{
    let location = useLocation().pathname;
    useEffect(() => {
            document.addEventListener('load', function(){
                let title = document.querySelector('.title');
                console.log(title);
            })
      });


    return(
        <div className={st.header}>
            {
                location === '/about' && <h1>About</h1>
            }
            {
                location === '/' && <h1>Onesta Group</h1>
            }
            {
                location === '/products' && <h1>products</h1>
            }
            {
                location === '/tehnolog' && <h1>tehnolog</h1>
            }
            {
                location === '/news' && <h1>news</h1>
            }
            {
                location === '/contacts' && <h1>contacts</h1>
            }
            {
                location === '/products/blog1/1' && <h1>test</h1>
            }
        </div>
    )
}

export default Header;