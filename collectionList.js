Template.MyCollectionList.helpers({

});

Template.MyCollectionList.events({

});

Template.MyCollectionList.rendered = function () {

};

Router.route('/myCollection', function () {
  this.render('MyCollectionList', {
    data: function () {
      return MyCollection.find();
    }
  });
}, {
  name: 'MyCollectionList'
});
