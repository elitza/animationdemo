var scene18 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene18",
      "title": "circles",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);


    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');

    var actor1 = scene.createActor('actor.png', 0, 225, 240, 88);
  actor1.circles(50, 2);
  actor1.circles(30, 0.5);
  actor1.shakes(10, 10, 0.6)
  actor1.drifts(2,0);
  // actor1.resets(100);

  return scene;
};
