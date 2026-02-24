$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
//toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 640, 150, 15, "navy")
createPlatform(500, 520, 150, 15, "navy")
createPlatform(120, 400, 245, 15, "navy")
createPlatform(505, 290, 200, 15, "navy")
createPlatform(820, 450, 300, 15, "navy")
createPlatform(760, 160, 650, 15, "navy")
createPlatform(950, 675, 430, 100, "navy")



    // TODO 3 - Create Collectables
createCollectable("database", 1245, 550, 0.5, 0.2)
createCollectable("database", 170, 250, 0.5, 0.2)
createCollectable("database", 1225, 1, 0.5, 0.2)



    // TODO 4 - Create Cannons
createCannon("right", 620, 2000)
createCannon("bottom", 850, 5000)
createCannon("top", 250, 3500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
