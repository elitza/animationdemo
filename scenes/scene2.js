    var scene2 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene2",
      "title": "Shaking",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 10, 10, 203, 64);
  home.navigatesOnTouch('scene0');

  var actor1 = scene.createActor('actor.png', 200, 100, 240, 88);
  actor1.shakes(50, -10, 1);
  scene.write(20, 205, "actor1 shakes as soon as the scene loads.");

  var actor2 = scene.createActor('actor.png', 20, 250, 240, 88);
  actor2.shakesOnTouch(50, -10, 1, 3);
  scene.write(20, 345, "actor2 shakes on touch. It is touchable 3 times.");

  var actor3 = scene.createActor('actor.png', 20, 410, 240, 88);
  var actor4 = scene.createActor('actor.png', 300, 410, 240, 88);
  actor3.letsShake(actor4, 50, -10, 1, 3);
  scene.write(20, 505, "Touching actor3 lets actor4 shake.");
    

    return scene;
};
