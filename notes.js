const fs = require('fs')
const chalk = require('chalk')

//..............Adding Notes................................

const addNotes = (title, body) =>
{
    const notes = loadNotes()
    
    //const duplicateNotes = notes.filter((note) => note.title === title)     ............checks every note rather than finding and returning
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title, 
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!!!'))
    }
    else
    {
        console.log(chalk.red.inverse("Note not Taken"))
    }
    
}

//............................Removing Notes.........................

const removeNotes = (title) => 
{
    const notes = loadNotes()

    const notesToKeep  = notes.filter((note) => note.title !== title)
    
    if(notesToKeep.length < notes.length)
    {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note Removed!!"))
    }
    else
    {
        console.log(chalk.red.inverse("No Note found"))
    }
    
} 

//..........................Listing Notes................................

const listNotes = () =>
{
    const notes = loadNotes()

    console.log(chalk.inverse('your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

//..........................Reading Notes.................................

const readNotes = (title) =>
{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}

//..........................Saving Notes..................................

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//..........................Loading Notes.................................

const loadNotes = () =>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e)
    {
        return []
    }
}

//..........................Exporting Notes.................................

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}