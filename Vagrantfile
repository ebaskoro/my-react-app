# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "debian/jessie64"

  config.vm.network "forwarded_port", guest: 9999, host: 9999

  config.vm.provision "shell", privileged: false, inline: <<-SHELL

    # Install nvm
    sudo apt-get install -y git-core curl
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
    echo "source $HOME/.nvm/nvm.sh" >> $HOME/.profile
    source $HOME/.profile

    # Install Node.JS 6.0.0
    nvm install v6.0.0
    nvm use v6.0.0

    # Install Gulp
    npm install --global gulp-cli

  SHELL

end
