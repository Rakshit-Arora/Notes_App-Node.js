const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk');
//const { argv } = require('yargs');

// customize the version
yargs.version('1.1.0')

// create add command

yargs.command({
    command: 'add', 
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Add a body',
            demandOption: true, 
            type: 'string'
        }
    },

    handler: (argv) => notes.addNotes(argv.title, argv.body)
})

// create a remove command

yargs.command({
    command: 'remove', 
    describe: 'Remove a note',

    builder: {
        title: {
            describe: 'Remove the title',
            demandOption: true, 
            type: 'string'
        }
    },

    handler: (argv) => notes.removeNotes(argv.title)

})

// create a read command

yargs.command({
    command: 'read', 
    describe: 'Read a note',

    builder: {
        title: {
            describe: 'Read the Title',
            demandOption: true,
            type: 'string'
        }
    },

    handler: (argv) => notes.readNotes(argv.title)
})

// create a command to list a note

yargs.command({
    command: 'list', 
    describe: 'List a note',
    handler: () => notes.listNotes()
})

yargs.parse()