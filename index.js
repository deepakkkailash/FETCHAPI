function FetchStuff(){
    window.open("datapage.html",`_blank`);
}

async function main(){

try{
   let response = await fetch('https://jsonplaceholder.typicode.com/posts');
   let data = await response.json();
   function fetchfunc(element){
        let space = document.getElementsByClassName("page");
        for(i=0;i<space.length;i++){
            if(space[i].innerHTML==""){
                space[i].innerHTML+=
                `
                    <h2>
                        ${element.title}
                    </h2>
                    <p>
                        ${element.body}
                    </p>
                `
            }
        }
   } 
    data.forEach(fetchfunc);
}

catch(e){
    console.log(e);
}
}
main();