namespace :web do
  desc "Check uptime on servers with role :web"
  task :uptime do
    on roles(:web), :in => :parallel do |host|
      uptime = capture(:uptime)
      puts "#{host.hostname} has been up for: #{uptime}"
    end
  end

  desc "Build"
  task :build do
    on roles(:web) do
      within release_path do
        execute :npm, "install"
        execute :broccoli, "build", "dist"
      end
    end
  end
end
