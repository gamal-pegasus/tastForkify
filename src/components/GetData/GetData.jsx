export default  async function getdata(x){
    let response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${x}`)
    let data= await response.json()
    console.log(data.recipes);
    return data.recipes;
    
}