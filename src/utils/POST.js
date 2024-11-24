const url = "https://api-godot.vercel.app/data"
const PostData = (data) => {
    if(data){
        fetch(url,{
            method:"POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        })
    }else{
        console.log("faltan datos")
    }
}

export default PostData