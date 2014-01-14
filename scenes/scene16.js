var scene16 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene16",
      "title": "Cloning",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');

    var actor1 = scene.createActor('actor.png', 50, -100, 240, 70);
    var actor2 = scene.createActor('actor.png', 900, -150, 240, 70);  
    actor2.clonesMovement(actor1, -100, -100);
    actor1.drifts(1,1);
    // actor1.resets();

  return scene;
};
