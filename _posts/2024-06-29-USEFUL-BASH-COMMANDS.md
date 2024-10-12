---
layout: post
title: "Useful Bash command"
date: 2024-06-29 23:45:00 +1000
---

# Packages:

1. Formatting your command line to quickly see the information of your git and cloud login info: `starship`
2. Node package manager `nvm`
3. Setup VIM editor
>[Basics of setting up Vim Control](https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/)

* `y` to yank the line (copy)
* `d` to delete the line
* `dd` to delete to current line and add to the top of registry (similar to copy)
* `V` , `Vj` selects multi lines
* `ddKp` cut and paste the line
* `:%s/^\s..//` remove the beginning space
* `/s` find the pattern 


# Command:

### Find all node_modules and remove them from a directory
This is useful to remove the node_modules from all the sub directories

```sh
❯ find ~/work/src/GitHub -name 'node_modules' -type d -prune | cut -d$'\n' -f1 | xargs -L1 rm -rf
```

### Zip the directory without symlink
```sh
❯ zip -r -y GitHub2024.zip ~/work/src/GitHub/
```

### Git commits

```sh
## Squash the last N commits together
git reset --soft HEAD~num_commits && git commit

##  Delete the branch with patterns
git branch | grep branch_patter | while read -r line; do git branch -D $line; done

git branch | grep -v main | xargs git branch -D

## Download all repos under a name
gh repo list <space> --limit 1000 --json sshUrl | jq '.[].sshUrl' | xargs -L1 -I'{}' git clone {}
```

### Kill the process running on a port
```sh
lsof -t -i:port | xargs kill
```