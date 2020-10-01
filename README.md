# Master The Event Loop

## TL;DR
Best   Website you will love it

#### [![](https://img.shields.io/badge/REACT%20%26%20REDUX%20WEB%20APP%20PROJECT-MASTER%20THE%20EVENT%20LOOP-ffa100?style=for-the-badge&logo=REACT)](https://github.com/r4pt0s/master_the_event_loop)

> _If you are a Javascript developer then you are already familiar with how Javascript works, right?_
> Well, it might not be the case. You are maybe  Javascript code since years but still don't understand how the language works under the hood. You may have heard about terms such as "Call Stack, Callback Queue, Event Loop" but what's the deal with them?
> Did you ask yourself, _Why is that, that javascript executes my code not in  if I use a callback function with a settimeout with a delay of 0 right before the console.log?_
>
> If you are finding answers to the above questions then you found the right place. This project exactly addresses this fact & tries to explain this fundamental process visually and words.
>
> We are basically building a improved version of [this awesome project](http://latentflip.com/loupe/)
>
> [Production version](https://master-the-event-loop.netlify.com/) > [Current dev deployment](https://deploy-preview-32--master-the-event-loop.netlify.com/)

## Work on the project locally

In  to work and run the project locally you need NodeJs and npm installed on your system.
Perform the following steps:

```
 git clone https://github.com/Dhaval1403/master-the-event-loop.git

 cd master_the_event_loop

 npm install
 npm start
```

# Git Workflow

##  first 🍴

We use the  approach for collaboration.  the repository first and sync it with the original repository.

### Steps to keep the local version up-to-date 🔄

#### Inital setup 🛫

- Clone your forked version
  `git clone <UrlToTheForKedVersion>`

- Update the remote Url in  to sync your  with the original repo
  `git remote add upstream https://github.com/Dhaval1403/master-the-event-loop.git`
  or by using ssh
  `git remote add upstream git@github.com:Dhaval1403/master-the-event-loop.git`
- Verify that all urls are in place
  `git remote -v`
  this should give you a output like this
  ```
    origin  https://github.com/username/master-the-event-loop.git (fetch)
    origin  https://github.com/username/master-the-event-loop.git (push)
    upstream        https://github.com/Dhaval1403/master-the-event-loop.git (fetch)
    upstream        https://github.com/Dhaval1403/master-the-event-loop.git (push)
  ```

#### Keep the local repository up-to-date & change into dev branch 🔄

Before starting to work on the files

- Get the latest version of the dev branch
  `git pull upstream dev`
- Get the latest version of the master branch
  `git pull upstream master`
- Make sure that you made your changes always in the dev branch.
-  in which branch you currently are
  `git branch`
  Then you will see something like this:
  ```
  * dev
  master
  ```
- If you are not in the dev branch switch to the dev branch
  `git checkout dev`
- Start hacking 💻

#### Keep the remote repository (forked version) up-to-date 🔄

- Get the latest version of the dev branch
  `git pull upstream dev`
- Get the latest version of the master branch
  `git pull upstream master`
- Push the new files to your forked version
  `git push origin dev`

#### Creating PRs 🆕

In  to tell us which changes you want to make in our project, push your changes to your  to the **dev branch** and create a pull request to the original repository. This makes sure that we always have a working and stable master branch after we tested your changes.
If we made our tests and the **dev branch** is stable, we will merge the **dev branch** into the master branch without closing the **dev branch**.

In  to make a PR on Github, follow this steps:

- Add your files for staging with
  `git add .` for adding all files or
  `git add <path/to/filename>` for adding specific files
- Commit your changes
  `git commit -m "commit message"`
- Push your changes to the forked version
  `git push origin dev`
- Move over to your github page and click on "Make pull request"

## Goal 🏁

The goal of this project is, to show new developers what happen if they write javascript code which gets executed.

## Data flow diagram

In  to better understand the data flow of our app, we created this little diagram.
![data_flow](static_assets/images/data_flow.png)

[Online version](https://whimsical.com/tkMQEQUTV5KpWkJVuD2wc)

## Who we are?

Our project team contains members from the [zero-to-mastery](https://zerotomastery.io) community.
Everything started with the Frosty February Hackathon 2020.

#### Project Lead

> [![r4pt0s](https://avatars2.githubusercontent.com/u/29685827?s=200&v=4)](https://github.com/r4pt0s) [![Dhaval1403](https://avatars0.githubusercontent.com/u/24822319?s=200&v=4)](https://github.com/Dhaval1403) [![Meet1103](https://avatars2.githubusercontent.com/u/47909913?s=200&v=4)](https://github.com/Meet1103)

#### Team Members and Contributers

> [![Avelansh](https://avatars3.githubusercontent.com/u/3317554?s=200&v=4)](https://github.com/Avelansh) [![AkinAguda](https://avatars3.githubusercontent.com/u/39712415?s=200&v=4)](https://github.com/AkinAguda) [![gideonlexy](https://robohash.org/gideonlexy?set=set3&size=200x200)](https://github.com/gideonlexy) [![anaol](https://robohash.org/anaol?set=set3&size=200x200)](https://github.com/anaol) [![tubacatal](https://avatars2.githubusercontent.com/u/22766582?s=200&v=4)](https://github.com/tubacatal) [![brainy099](https://avatars2.githubusercontent.com/u/26685312?s=200&v=4)](https://github.com/brainy099) [![faizhameed](https://avatars1.githubusercontent.com/u/41015883?s=200&v=4)](https://github.com/faizhameed/) [![rahulzura](https://avatars2.githubusercontent.com/u/46083375?s=200&v=4)](https://github.com/rahulzura)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
