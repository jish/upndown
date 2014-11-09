
Update and upgrade packages.

    sudo apt-get update
    sudo apt-get upgrade

Install Nginx and Git.

    sudo apt-get install nginx
    sudo apt-get install git

Create a `deploy` group and add users to it

Create a `restart_nginx` script, and give users in the `deploy` group access
to run it.

---

* Nginx configuration https://gist.github.com/farmani/87cabb7e7845e4a4cb31
