#!/usr/bin/env python3
import os

confiles = ["webpack_main.config.js", "webpack_aichat.config.js"]
fcontent = [
    """const path = require('path');

module.exports = {
  entry: './js/main.js', //'./src/js/aichat.js', // replace with your main JS file path
  output: {
    filename: 'script.js', //'AIchat.js',
    path: path.resolve(__dirname, './js'),
  },
  mode: 'development', // or 'development' if you're still working on it
};
""",
    """const path = require('path');

module.exports = {
  entry: './js/aichat.js', // replace with your main JS file path
  output: {
    filename: 'AIchat.js',
    path: path.resolve(__dirname, './js'),
  },
  mode: 'development', // or 'development' if you're still working on it
};
"""
]


def _compile():
    for file, conf in zip(confiles, fcontent):
        try:
            with open(file, 'w') as f:
                f.write(conf)
                print(
                    f"\033[1mWrite:\n\033[0;34m{conf}\033[0m to \n\033[33m{file}\033[0m")
            print("\033[32mPack...\033[0m")
            cmd = f"npx webpack --config-name {file}"
            os.system(cmd)
        except FileExistsError:
            pass
        except Exception as e:
            print(f"\033[31mP{e}\033[0m")


if __name__ == "__main__":
    _compile()
