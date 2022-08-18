let  getdata=async()=>{
    try{
        //  let youtube=document.getElementById("youtube").value;
         let res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?&part=snippet&maxResults=30&chart=mostPopular&locale=India&regionCode=IN&key=AIzaSyD4FBlPEPRpLXAmXWCNCon5PoRLNJuN34I`)
        let {items} =await res.json();
        console.log(items)
        let array_of_video=items;
        Append(array_of_video)
    }catch(err){
        console.log(err)
    }
 }
 getdata()



 let Append=(data)=>{
    let container=document.getElementById("container")
    
    data.forEach(({snippet:{title},id})=>{
        // container.innerHTML=n    //    let title=el.snippet.title;
    //    let video=el.id.videoId;
    let div=document.createElement("div");
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${id}`;
    iframe.width="90%"
    iframe.height="400px"
    iframe.allow="fullscreen";
    let name=document.createElement("h5")
    name.innerText=title;
    div.append(iframe,name)  
    container.append(div)
    console.log(id)
    
    // let data={
    //     snippet:snippet,
    //     videoId:videoId
    // }
    // div.onclick=()=>{
    //     localStorage.setItem("click",JSON.stringify(data))
    // }
       })
 }


//  ****************************************************

// fsdjkhdljsjkljdklfkldfjkldsjgfkldsaklfjkldsjfkldsjfkljdsklfjsdklfjlkd
// dfkjklcjklfkldfkljdslkndklfkldfkldjfkldjfkljakljlkdsjflksjflksdjfkljsdklflk



let  getData=async()=>{
    try{
         let youtube=document.getElementById("youtube").value;
         let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?&q=${youtube}&key=AIzaSyD4FBlPEPRpLXAmXWCNCon5PoRLNJuN34I&part=snippet&maxResults=30`)
        let {items} =await res.json();
        console.log(items)
        let array_of_video=items;
        append(array_of_video)
    }catch(err){
        console.log(err)
    }
 }
 let container=document.getElementById("container")


 let append=(data)=>{
    container.innerHTML=null
    data.forEach(({snippet:{title},id:{videoId}})=>{
        // container.innerHTML=null
    //    let title=el.snippet.title;
    //    let video=el.id.videoId;
    let div=document.createElement("div");
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}`;
    iframe.width="100%"
    iframe.height="400px"
    iframe.allow="fullscreen";
    let name=document.createElement("h5")
    name.innerText=title;
    div.append(iframe,name)  
    container.append(div);
    console.log(videoId)
    
       })
 }