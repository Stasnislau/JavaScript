document.getElementById("OK-button").addEventListener("click", function(){
  const dimension = document.getElementById("dimensions-input").value;
  for(let i=0;i < dimension;i++)
    {
        for (let j=0; j < dimension; j++)
        {
            let tile = document.createElement("button");
            tile.className = "game-tile";
            tile.id = "tile-{}"
        }
    }
})