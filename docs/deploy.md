### Deploy

Capistrano will update its cached copy of the Git repo, then call `sudo restart_nginx`.

To deploy:

    bundle exec cap production deploy
