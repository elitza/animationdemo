var scene12 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene12",
      "title": "reacts2",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');
    
    var box = scene.createActor('actor.png', 300, 150, 240, 88);
  box.reacts2("this.setInitialOpacity(0.3)");
  l("box.reactions.size: " + box.reactions.length);

  var arrow1 = scene.createActor('arrow-left.png', 30, 450);
  arrow1.navigatesOnTouch('scene10');

  // var arrow2 = scene.createActor('arrow-right.png', 610, 430, 160, 139);
  // arrow2.navigatesOnTouch('scene4', 'arrow-right-active.png');

  scene.write(150, 10, "reacts2");

  return scene;
};
