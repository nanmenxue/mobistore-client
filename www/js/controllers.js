angular.module('mobistore.controllers', [])

  .controller('HomeCtrl', function($scope) {
    $scope.productions = [
      {'id':'001','name': '如实无添加发酵乳', 'capacity': '135 G'},
      {'id':'002','name': '嘟嘟儿童高品质牛奶', 'capacity': '200 ML'},
      {'id':'003','name': '新鲜杯优倍', 'capacity': '200 ML'},
      {'id':'004','name': '白雪风味酸牛奶（低脂）', 'capacity': '200 G'},
    ]
  })

  .controller('CategoryCtrl', function($scope) {

  })
  .controller('ShoppingcartCtrl', function($scope) {
    var i = 0;
  })
  .controller('MineCtrl', function($scope) {
    var i = 0;
  });
