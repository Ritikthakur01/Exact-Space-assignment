// To find the largest log file on the entire computer, it's important to note that accessing system directories like $Recycle.Bin, C:\$SysReset, C:\Documents and Settings.

const fs = require('fs').promises;
const path = require('path');

// Truncate a file to the specified number of lines
async function truncateFile(filePath, maxLines) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const lines = content.split('\n').slice(0, maxLines).join('\n');
    await fs.writeFile(filePath, lines, 'utf8');
    console.log('File truncated to', maxLines, 'lines:', filePath);
  } catch (error) {
    console.error('Error truncating file:', error);
  }
}

// Recursively traverse directories, find the largest log file, and truncate it
async function findAndTruncateLargestLogFile(directoryPath, maxLines) {
  let largestSize = 0;
  let largestFilePath = '';

  // Recursive function to traverse directories and find largest log file
  async function traverseDirectories(directoryPath) {
    try {
      const entries = await fs.readdir(directoryPath);

      for (const entry of entries) {
        const entryPath = path.join(directoryPath, entry);
        try {
          const stats = await fs.stat(entryPath);

          // If it's a log file, check if it's the largest
          if (stats.isFile() && (entry.endsWith('.log') || entry.endsWith('.txt'))) {
            if (stats.size > largestSize) {
              largestSize = stats.size;
              largestFilePath = entryPath;
            }
          } else if (stats.isDirectory()) {
            // Recurse into subdirectories
            await traverseDirectories(entryPath);
          }
        } catch (error) {
          // Handle errors accessing files/directories
          console.error('Error accessing', entryPath, ':', error.message);
        }
      }
    } catch (error) {
      // Handle errors reading the directory
      console.error('An error occurred:', error.message);
    }
  }

  // Start traversing directories from the specified directory
  await traverseDirectories(directoryPath);

  // If no suitable log file was found, exit
  if (!largestFilePath) {
    console.log('No suitable log files found.');
    return;
  }

  // Truncate the largest log file
  await truncateFile(largestFilePath, maxLines);
  console.log('Largest log file truncated to', maxLines, 'lines:', largestFilePath);
}

// Main function
async function main() {
  const startDirectory = 'C:\\'; // Change this to your desired start directory 
  const maxLines = 100;

  // Call the function to find and truncate the largest log file
  await findAndTruncateLargestLogFile(startDirectory, maxLines);
}

// Run the main function
main();
