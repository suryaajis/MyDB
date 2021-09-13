const pool = require('./connection')
const fs = require('fs')

// insert data politicians
// insert data voters
// insert data votes

const dataPoliticians = JSON.parse(fs.readFileSync('../data/politician.json', 'utf8'))
const dataVoters = JSON.parse(fs.readFileSync('../data/voter.json', 'utf8'))
const dataVotes = JSON.parse(fs.readFileSync('../data/vote.json', 'utf8'))

// ==== Insert Data Politician ====
let insertPoliticianQuery = `
INSERT INTO "Politicians" ("name", "party", "location", "grade_current")
VALUES `

dataPoliticians.forEach((politician, index) => {
  let {name, party, location, grade_current} = politician

  if( index === dataPoliticians.length - 1 ) {
    insertPoliticianQuery += `('${name}', '${party}', '${location}', ${grade_current});`
  } else {
    insertPoliticianQuery += `('${name}', '${party}', '${location}', ${grade_current}), `
  }
})

// ==== Insert Data Voters ====
let insertVoterQuery = `
INSERT INTO "Voters" ("first_name", "last_name", "gender", "age")
VALUES `

dataVoters.forEach((voter, index) => {
  let {first_name, last_name, gender, age} = voter

  if( index === dataVoters.length - 1 ) {
    insertVoterQuery += `('${first_name}', '${last_name}', '${gender}', ${age});`
  } else {
    insertVoterQuery += `('${first_name}', '${last_name}', '${gender}', ${age}), `
  }
})


// ==== Insert Data Votes ====
let insertVoteQuery = `
INSERT INTO "Votes" ("voterId", "politicianId")
VALUES `

dataVotes.forEach((politician, index) => {
  let {voterId, politicianId} = politician

  if( index === dataVotes.length - 1 ) {
    insertVoteQuery += `(${voterId}, ${politicianId});`
  } else {
    insertVoteQuery += `(${voterId}, ${politicianId}), `
  }
})


// Initialization

pool.query(insertPoliticianQuery, (err, res) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Success add data Politicians`)
    pool.query(insertVoterQuery, (err, res) => {
      if(err) {
        console.log(err)
      } else {
        console.log(`Success add data Voters`)
        pool.query(insertVoterQuery, (err ,res ) => {
          if(err) {
            console.log(err)
          } else {
            console.log(`Success add data Votes`)
          }
        })
      }
    })
  }
})