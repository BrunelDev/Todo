
export async function FetchTodo({method ='post', url = 'http://192.168.0.126:8000/api/todo', setTab = undefined, task = ""}){
    /* la methode get sera utilisée une seule fois au lancement de l'application*/
    console.log(url)
    if (method === 'get'){
        await fetch(url)
        .then((todo)=> todo.json())
        .catch((e)=>console.log("erreur lors de l'obtention des données"))
        .then((todo)=>{setTab(todo.res)})
        
    }
    else if(method === 'post'){
        await fetch(url,{
            method: 'POST',
            headers: {
                'accepted': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
            
        })

    }

}