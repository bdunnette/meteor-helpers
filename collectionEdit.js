Template.MyCollectionEdit.helpers({
  onDelete: function () {
    return function (result) {
      //when record is deleted, go back to record listing
      Router.go('MyCollectionList');
    };
  },
});

Template.MyCollectionEdit.events({

});

Template.MyCollectionEdit.rendered = function () {

};

Router.route('/myCollection/:_id/edit', function () {
  this.render('MyCollectionEdit', {
    data: function () {
      return MyCollection.findOne({
        _id: this.params._id
      });
    }
  });
}, {
  name: 'MyCollectionEdit'
});

AutoForm.hooks({
  updateMyCollectionForm: {
    onSuccess: function (operation, result, template) {
      Router.go('MyCollectionView', {
        _id: template.data.doc._id
      });
    },
  }
});