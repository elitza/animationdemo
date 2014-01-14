var scene24 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene24",
      "title": "Bounces",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');
    
    scene.write(20, 110, "Bounces", "title");

    var actor1 = scene.createActor('actor.png', 270, 110, 240, 70);
    actor1.bounces(100, 1, 0, 1.0);
    scene.write(20, 205, "actor1 bounces 100 pixels high one time per second.");

    var actor2 = scene.createActor('actor.png', 270, 400, 240, 70);
    actor2.bouncesOnTouch(200, 1, 3, 0.6);
    scene.write(20, 495, "actor2 bounces three times on touch, slightly loses motivation while doing so.");

  return scene;
};
