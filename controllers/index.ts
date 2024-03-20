// import * as fs from 'fs';
// import * as path from 'path';

// // Get the current directory path
// const directoryPath = path.join(__dirname);

// // Get all directories in the directory
// fs.readdir(directoryPath, function (err, folders) {
//     if (err) {
//         return console.error('Unable to scan directory: ' + err);
//     }

//     // Iterate through each feature directory
//     folders.forEach(folder => {
//         const featurePath = path.join(__dirname, folder);

//         // Check if it's a directory
//         if (fs.statSync(featurePath).isDirectory()) {
//             // Get all files in the feature directory
//             fs.readdir(featurePath, function (err, files) {
//                 if (err) {
//                     return console.error('Unable to scan directory: ' + err);
//                 }

//                 // Filter out index.ts and files starting with "."
//                 const filteredFiles = files.filter(file => !file.startsWith('.') && file !== 'index.ts');

//                 // Export all functions from all files
//                 filteredFiles.forEach(file => {
//                     const module = require(path.join(featurePath, file));
//                     for (const exportedName in module) {
//                         if (typeof module[exportedName] === 'function') {
//                             exports[exportedName] = module[exportedName];
//                         }
//                     }
//                 });
//             });
//         }
//     });
// });
