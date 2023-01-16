import React,{useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey ="cfaf750831c5c47626d78cab851bce7e2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App=()=>{

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({command,articles})=>{
                if(command ==='testCommand'){
                    window.open("https://google.com");
                }
                if(command === 'testCommand1'){
                    window.open('https://youtube.com')
                }
                if(command === 'testcommand2'){
                    console.log(articles)
                }

            }
        })

    },[])

    return(
        <div>
            <h>hello</h>
        </div>
    )
}
export default App;