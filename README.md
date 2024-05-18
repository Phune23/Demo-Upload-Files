# Demo-Upload-Files
How to Upload Files in Node.js Using Express and Multer
# ⬇ Install `express` and `multer`:
```bash
npm install express multer
```

# run:
```bash
npm install express multer
```

# If you run have error like this:
```bash
nodemon : The term 'nodemon' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling 
of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ nodemon app.js
+ ~~~~~~~
    + CategoryInfo          : ObjectNotFound: (nodemon:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```
# You can try this way:
```bash
npm i -g nodemon
```
# After you trying the above method, you still get an error like this:
```bash
nodemon : File C:\Users\ADMIN\AppData\Roaming\npm\nodemon.ps1 cannot be loaded. The file C:\Users\ADMIN\AppData\Roaming\npm\nodemon.ps1 
is not digitally signed. You cannot run this script on the current system. For more information about running scripts and setting        
execution policy, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=********.
At line:1 char:1
+ nodemon app.js
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
``` 
# You can try this way:
You can open your `terminal` and `run administrator` this code.
```bash
Set-ExecutionPolicy Unrestricted
```