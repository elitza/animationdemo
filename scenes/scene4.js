    var scene4 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene4",
      "title": "Appearing",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 10, 10, 203, 64);
  home.navigatesOnTouch('scene0');

  var actor1 = scene.createActor('actor.png', 20, 110, 240, 88);
  actor1.appears(500, 2000);
  scene.write(20, 205, "actor1 appears when the scene loads.");

  var actor3 = scene.createActor('actor.png', 300, 250, 240, 88);
  scene.createActor('actor.png', 20, 250, 240, 88).letsAppear(actor3, 500, 2000);
  // actor2.letsDissolve(actor3, 500);
  scene.write(20, 345, "click on actor2 to let actor3 appear");

  var actor5 = scene.createActor('actor.png', 285, 400, 240, 88);
  var actor4 = scene.createActor('actors/actor1.png', 20, 400, 240, 88).letsAppear(actor5, 500, 2000).dissolvesOnTouch(2000).letsResetReactions(actor5);

  var actor6 = scene.createActor('actor.png', 540, 400, 240, 88);
  actor5.letsAppear(actor6, 500, 2000);
  actor5.dissolvesOnTouch(2000);
  actor5.letsResetReactions(actor6);

  // actor6.letsAppear(actor4, 500, 2000);
  actor6.letsAppearStartsVisible(actor4, 500, 2000);
  actor6.letsResetReactions(actor4);
  actor6.dissolvesOnTouch(2000);
  scene.write(30, 500, "click on actor4 to let actor5 appear while letting actor4 disappear,<br />clicking actor5 then lets actor6 appear while dissolving itself.");

  var actor7 = scene.createActor('actors/actor7.png', 450, 110, 240, 88);
  var actor8 = scene.createActor('actors/actor8.png', 450, 110, 240, 88);
  actor7.letsAppear(actor8);
  actor7.dissolvesOnTouch(actor7);
  actor7.letsResetReactions(actor8);
  actor8.letsAppearStartsVisible(actor7);
  actor8.dissolvesOnTouch(actor8);
  actor8.letsResetReactions(actor7);
  scene.write(450, 205, "actor7 and actor8 toggle on touch");
    

    return scene;
};
