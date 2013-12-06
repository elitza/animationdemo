var scene22 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene22",
      "title": "Layers 1",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');
    
    scene.write(20, 110, "Layers (in development)", "title");
  scene.write(20, 145, "Change the perspective by using the buttons below.", "");

  var actor1 = scene.createActor('actors/actor1.png', 250, 230, 240, 88);
  actor1.isInLayer(2);

  var actor2 = scene.createActor('actors/actor2.png', 100, 300, 240, 88);
  actor2.isInLayer(3);

  var actor3 = scene.createActor('actors/actor3.png', 400, 300, 240, 88);
  actor3.isInLayer(3);

  var actor4 = scene.createActor('actors/actor4.png', 250, 370, 240, 88);
  actor4.isInLayer(4);

  scene.createActor('actor.png', 20, 500, 240, 88).setText('shift perspective left', '', 'button').shiftsPerspectiveOnTouch(5);
  scene.createActor('actor.png', 540, 500, 240, 88).setText('shift perspective right', '', 'button').shiftsPerspectiveOnTouch(-5);
  
  return scene;
};
