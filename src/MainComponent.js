import React from 'react';
import './MainComponent.css';

export default function MainComponent() {
  return (
    <div>
          
        <header>
              <h1>Reasons to learn React</h1>

          <ol className='item-lists'>
              <li>It's a popular JS framework</li>
              <li>I could easily get a job as a React developer</li>
          </ol>
          <br /> <br />

        </header>

        <article>

            <h2>What is React</h2>

          <p className='main-content'>
                  React was originally created by Jordan
                  Walke and was relased in 2013. <br />

                  React has a syntax called jsx which defines how react is used.
                  If we remove the syntax, it will tell us that react is not defined. <br />
                  
                  Recommendation for learning and installing react is by reading the react documentaion.     
          </p>  

              <h2>What is JSX and why do we use it in React. </h2>
              
              <p>JSX is a react syntax, jsx is used in defining react.
                  If we remove jsx when defining react,
                  it will tell us that react is not defined.

                  In order to use JSX in react,we need to import react.

              </p>
              
                <h4>Why do we <span>import</span> React from <span>react</span> in our files. </h4>
        
                <p>React is what defines jsx.</p>
          
          </article>

         
             

        
    </div>
      
      
  )
}
