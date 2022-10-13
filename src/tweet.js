function Tweet (props) {
    
    return  <div class="twit">
   
  
   
    <div className="author">     
    
    <div>
    <div>
   <img src={props.logo} className="logo"></img>
   </div>  
   <img src={props.profile_pic} className="profile_pic"></img>
   
   </div>  

        {props.author}
        
        
</div>
     <div className="username">

    {props.username}
     </div>
        {props.text}

        {/* {
            props.replies.map((reply)=> {
                return <div>{reply}</div>
            })
        } */}

        <div className="data">
            {props.data}
        </div>
        <h3></h3>
        <h1 className="underline">‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  </h1>
       <div className="bottomnav">
        
        <h1 className="reply">&#8506; <h2 class="reptag">reply</h2></h1>
        
        <h1 className="heart"> &#9829;<h2 class="reptag">like</h2>  </h1>
        <h1 className="share"> &#8618; <h2 class="reptag">share</h2></h1>
        </div>
      
    </div>
}


export default Tweet;
