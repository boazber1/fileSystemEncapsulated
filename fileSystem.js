/**
 * Created by Boaz on 24/01/2017.
 */

const readlineSync = require('readline-sync');
const colors = require('colors');
var exit = false;//global variable to control the exit command
//var uniqueID = 0;// an ID of each file in the storage
var path = 'root >';
var level = 0;// level distance from root folder

var menu = [//user menu
    ' Print current folder.',
    ' Change(go back or forward) ',
    ' Create file or folder',
    ' Open file',
    ' Delete file',
    ' Exit(suit yourself out from the program)'
];

var storage = [
    {
        id: 0,
        name: 'root',
        type: 'directory',
        subFiles:[
            {
                id: 1,
                name: 'sub1',
                type: 'directory',
                subFiles: [
                    {
                        id: 4,
                        name: 'file.txt1',
                        type: 'file',
                        content: 'i\'m file.txt1'
                    },

                ]

            },
            {
                id: 2,
                name: 'sub2',
                type: 'directory',
                subFiles :[

                ]

            },

            {
                id: 3,
                name: 'file1.txt',
                type :'file',
                content: 'i\'m file.txt1...'

            },
        ]


    }
];
var root = storage[0];// will hold our array of files from the root point
console.log(colors.green(path) );


while(!exit){
    printMenu();
}

/*file structure  : {id : 'unique id' , name :'fileName', type: 'file type directory or file',
 subFiles(if needed): [], content(in txt files) : }

 */




function printMenu(){
    var userMenuInput = readlineSync.keyInSelect(menu, 'Chose your menu option(1 to 6):');
    userMenuInput++;
    switch (userMenuInput){//calling functions according to user menu input
        case 1 :
            printRootSorted();
            break;
        case 2 :
            changeDirectory();

            break;
        case 3 :
            createNewFile();
            break;
        case 4 :
            showFileContent();
            break;
        case 5 :
            deleteFile();
            break;
        case 6 :
            exitProgram();
            break;

        default:
            console.log("What is wrong with you?? chose menu item between 1 to 6");

    }
}
/**** User functions ****/
function printRootSorted(){


    console.log(path);
    var folder = currentFolder(root, 3);
    console.log(folder);
    var foldersrArray = [];
    var filesArray = [];
    for (var i = 0 ; i < storage.length; i++){

    }

}

function changeDirectory(){

}

function createNewFile() {

}

function showFileContent(){

}

function deleteFile(){

}

function exitProgram() {// exit the program safely using the process object
    var exitProgram = readlineSync.question("Are you sure you want to exit? (y / n)");
    if(exitProgram.toLowerCase() === 'y'){
        exit = true;
        process.exit();
    } else if(exitProgram.toLowerCase() === 'n' ){
        printMenu();
    } else {
        console.log("Your answer should contain y or n");
        printMenu();
    }
}

/*** intermediate functions ***/

function currentFolder (currentFile, id){//given current file
    console.log(currentFile.name + "\t" +currentFile.id);
    var res = undefined;
     if(currentFile.id === id){
         return currentFile; //recursion termination
     } else {
         console.log("not equal");
         if(currentFile.type === 'directory') {
             for (var i = 0; i < currentFile.subFiles.length; i++) {
                 if (currentFile.subFiles[i].id === id) {
                     return currentFile.subFiles[i];
                 } else {
                     res =  currentFolder(currentFile.subFiles[i], id);
                     if(res !== undefined){
                         return res;
                     }
                 }
             }
         }
     }
}
