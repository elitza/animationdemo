var scene11 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene11",
      "title": "AddPhase1",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');
  
    var actor1 = scene.createActor('actors/actor1.png', 20, 110, 240, 88);
    actor1.addPhase('actors/actor2.png');
    actor1.addPhase('actors/actor3.png');
    actor1.addPhase('actors/actor4.png');
    actor1.phaseCycle = 2000;

    scene.write(20, 205, "actor1.png - actor4.png are cycled through within a cycle length of 2 seconds.");

    

  return scene;
};
