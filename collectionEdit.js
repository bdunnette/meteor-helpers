Template.MyCollectionEdit.helpers({

});

Template.MyCollectionEdit.events({

});

Template.MyCollectionEdit.rendered = function () {

};

AutoForm.hooks({
  updateMyCollectionForm: {
    onSuccess: function (operation, result, template) {
      Router.go('MyCollectionView', {
        _id: template.data.doc._id
      });
    },
  }
});