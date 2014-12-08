MyCollection = new Mongo.Collection("myCollection");

MyCollectionSchema = new SimpleSchema({
  title:{type:String},
  description:{type:String, optional:true}
});

MyCollection.attachSchema(MyCollectionSchema);

Router.route('/myCollection', function () {
  this.render('MyCollectionList');
}, {
  name: 'MyCollectionList'
});