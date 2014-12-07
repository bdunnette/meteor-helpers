meteor-helpers
==============
Shell scripts to help with the setup of [Meteor.js](https://www.meteor.com/) applications.

To use from the command line, add the following to your _.bashrc_ (or _.bash_profile_ for OS X users - assuming you've installed the scripts in the .meteor-helpers subdirectory of your home directory):

```
PATH=$PATH:~/.meteor-helpers
export METEOR_HELPER_PATH=~/.meteor-helpers
```

Once installed, you can:
+ Create an app: ```meteor-create-app <appName>```
+ Add a collection: ```meteor-add-collection <collectionName>```
