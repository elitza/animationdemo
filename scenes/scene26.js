var scene26 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene26",
      "title": "global sync actor",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);


    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');

    var mytext = "<a href=\"mailto:you@example.com?subject=transfer%20identity&body=" + encodeURIComponent(identitylink()) + "\">mail your identity to another computer</a>";
  scene.write(10, 100, mytext, "");

  // scene.write(10, 100, "…working on a globally synchronized actor", "");

  // var actor1 = scene.createActor('actor.png', 250, 530);
  // actor1.circles(30, 0.7, 0);
  // actor1.drifts(+0.5, -1);
  // // actor1.resets();
  // actor1.resets();
  // actor1.isPublic();

  return scene;
};
