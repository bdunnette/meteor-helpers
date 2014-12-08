meteor-helpers
==============
Shell scripts to help with the setup of [Meteor.js](https://www.meteor.com/) applications.

To use from the command line, just run the [add-to-path](./add-to-path) script, or add the following to your _.bashrc_ (or _.bash_profile_ for OS X users):

```
PATH=$PATH:~/.meteor-helpers
export METEOR_HELPER_PATH=~/.meteor-helpers
```

Once installed, you can:
+ Create an app: ```meteor-create-app <appName>```
+ Add a collection: ```meteor-add-collection <collectionName>```
