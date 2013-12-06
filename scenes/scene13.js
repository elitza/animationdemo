var scene13 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene13",
      "title": "Swinging",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');
    
    var actor1 = scene.createActor('actor.png', 270, 250, 240, 88);
    actor1.swings(90, 0.5, 0, 0);
    scene.write(20, 100, "actor1 swings with a frequency of 0.5 hertz 90 degrees around the top left corner.");

  return scene;
};
