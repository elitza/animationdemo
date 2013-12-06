var scene21 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene21",
      "title": "CSS Tricks",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');
    

    var actor1 = scene.createActor('actor.png', 100, 100, 240, 88);
  actor1.setText('actor1.addClass("blueborder");', '', 'scene21actortext');
  actor1.addClass("blueborder");

  var actor2 = scene.createActor('actor.png', 100, 200, 240, 88);
  actor2.setText('actor2.addClass("redborder");', '', 'scene21actortext');
  actor2.addClass("redborder");

  var actor3 = scene.createActor('actor.png', 100, 300, 240, 88);
  actor3.setText('actor3.hasId("blackborder");', '', 'scene21actortext');
  actor3.hasId("blackborder");

  var text = "We set the actor's DOM-class resp. ID, then style them via custom.css."
  scene.write(400, 100, text, "scene21text");

  return scene;
};
