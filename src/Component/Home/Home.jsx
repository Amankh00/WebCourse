
import './Home.css';

function Home() 
{
  return(
   <>
    <div className="container" id="/" >



<div className="second" id="co">
    <input type="text" placeholder="Type To Search" className="search" name="q"/>
    <input type="reset" value="search" name="q" className="btn"/>

</div>



<div className="third">
    
        <h1 className='rad'>Web Design & <pre>
<span>Development</span> 
Course </pre></h1>
        <p>What is called web designer?</p>
        <p className="para">
            A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good. They use design programs to create visual elements. Web designing is of three kinds, to be specific static, dynamic or CMS and eCommerce.</p>
    
</div>
  
{/* <div className="login" id="log">
    <h1>Login Here</h1>
    <input type="text" placeholder="Enter Email Here"/>
    <br/>
    <input type="password" placeholder="Enter Password Here"/>
    <br/>
    <p>Don't Have Aan Account?</p>
    <p><a href="#"  >Sign up</a>Here</p>
    
</div> */}
<div className="headimg">
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png" alt="" />
</div>
</div>




    </>
  )
  
}

export default Home;
