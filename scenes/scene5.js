var scene5 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene5",
      "title": "Waving",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);


    var home = scene.createActor('home.png', 10, 10, 203, 64);
  home.navigatesOnTouch('scene0');

  var actor1 = scene.createActor('actor.png', 300, 120, 240, 88);
  actor1.waves(15, 0.25, 240, 88);

  scene.write(20, 230, "actor1 waves with a radius of 15 degrees, a frequency of 0.25 Hertz,<br />an x-offset of 240 pixels and a y-offset of 88 pixels.");

  return scene;
};
