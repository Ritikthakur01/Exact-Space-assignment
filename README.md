cat > README.md <<EOL

# Log File Truncation using Node.js

This repository contains a Node.js script to search for log files in a directory and its subdirectories, and truncate the largest log file to a specified number of lines. This can be useful for managing log files and reducing their size while retaining the most recent log entries.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)

## Features

- Recursively searches for log files in a specified directory and its subdirectories.
- Identifies the largest log file based on file size.
- Truncates the largest log file to a specified number of lines.
- Provides detailed console output for each processed file.

## Getting Started

### Prerequisites

- Node.js (Download and install from [nodejs.org](https://nodejs.org/))

### Installation

1. Clone this repository to your local machine:

   \```sh
   git clone https://github.com/Ritikthakur01/Exact-Space-assignment.git
   cd log-file-truncation
   \```

2. Install the required dependencies:

   \```sh
   npm install
   \```

### Usage

1. Open the \`search_and_truncate.js\` file and set the \`startDirectory\` variable to the directory from which you want to start the search.

2. Open a terminal or command prompt and navigate to the repository directory.

3. Run the script using Node.js:

   \```sh
   node search_and_truncate.js
   \```

4. The script will search for log files, identify the largest one, and truncate it to the specified number of lines.

## Configuration

You can modify the following variables in the \`search_and_truncate.js\` file:

- \`startDirectory\`: The directory from which the search for log files should start.
- \`maxLines\`: The number of lines to which the largest log file will be truncated.
