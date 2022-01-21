## Set multiple projects in one git repository:

- First, make a directory command `mkdir [name] ` and `cd [folder name]`.
- Make a repository in the GitHub and copy the command code from the created repository.
- This is the main repository and under the repository, we will make multiple projects.
- Then write the command `git init` and pash the command that was copied in the GitHub repository.
- Run command `npm init -y`.
- Now we make multiple projects under this main repository.
- Create the first project.

#### To begin, run the command

```
npx create-react-app my-app
```

- Go to the created app `cd [folder name]`
- Delete the `.git` file so write command `rm -rf .git`
- `cd ..` to come back to the main folder and edit the main `package.json` file.

#### To begin, edit the scripts:

```
 "scripts": {
    "folder-name": "npm start --prefix ./folder-name",
    "folder-two": "npm start --prefix ./folder-two"
  },
```

- Now we can easily run the code through these scripts.
- To run the projects command `npm run folder-name` and for the second project, `npm run folder-two` and so on.
- To push the command in the GitHub and go to the main branch.

#### Run the command:

```
 git add .
 git commit -m "write the comment"
 git push
```
