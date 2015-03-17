Template.MyCollectionView.helpers({

});

Template.MyCollectionView.events({

});

Template.MyCollectionView.rendered = function () {

};

Router.route('/myCollection/:_id', function () {
  this.render('MyCollectionView', {
    data: function () {
      return MyCollection.findOne({
        _id: this.params._id
      });
    }
  });
}, {
  name: 'MyCollectionView'
});