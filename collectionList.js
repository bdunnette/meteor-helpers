Template.MyCollectionList.helpers({
  myCollection: function () {
    return MyCollection.find();
  }
});

Template.MyCollectionList.events({

});

Template.MyCollectionList.rendered = function () {

};

Router.route('/myCollection', function () {
  this.render('MyCollectionList');
}, {
  name: 'MyCollectionList'
});