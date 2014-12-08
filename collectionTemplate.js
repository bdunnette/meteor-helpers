MyCollection = new Mongo.Collection("myCollection");

MyCollectionSchema = new SimpleSchema({
  title: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
});

MyCollection.attachSchema(MyCollectionSchema);

MyCollection.allow({
  insert: function (userId, doc) {
    return true
  },
  update: function (userId, doc, fieldNames, modifier) {
    return true
  },
  remove: function (userId, doc) {
    return true
  }
});

MyCollection.deny({
  insert: function (userId, doc) {
    return false
  },
  update: function (userId, doc, fieldNames, modifier) {
    return false
  },
  remove: function (userId, doc) {
    return false
  }
});

Router.route('/myCollection', function () {
  this.render('MyCollectionList', {
    data: function () {
      return MyCollection.find();
    }
  });
}, {
  name: 'MyCollectionList'
});

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
