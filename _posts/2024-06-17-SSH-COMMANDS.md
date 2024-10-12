---
layout: post
title: "SSH-COMMANDS-MAC"
date: 2024-06-17 22:30:00 +1000
---


## Commands to setup SSH
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

```sh
ls -al ~/.ssh
# Removes all keys belonging to hostname from a known_hosts file. This option is useful to delete hashed hosts (see the -H option above).
ssh-keygen -R github.com
ssh-keygen -t ed25519 -C "email@gmail.com"
# enter passphrase to usekeychain
eval "$(ssh-agent -s)"
open ~/.ssh/config
# Add the host like this 
#Host github.com
#   AddKeysToAgent yes
#   UseKeychain yes
#   IdentityFile ~/.ssh/id_ed25519_GitHub
ssh-add --apple-use-keychain ~/.ssh/id_ed25519_GitHub
pbcopy < ~/.ssh/id_ed25519_GitHub.pub
# Copy this to SSH
```
