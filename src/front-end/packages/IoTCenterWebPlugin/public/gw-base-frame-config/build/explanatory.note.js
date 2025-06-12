const child_process = require('child_process')
const nowDate = new Date()
const version = child_process.execSync('git tag --sort=-taggerdate').toString().trim().split('\n')[0]
const buildUserName = child_process.execSync('git config user.name').toString().trim()
const buildDate = `${nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + ' ' + nowDate.getHours() + ':' + nowDate.getMinutes()}`
module.exports = { "版本号": version, "发布人员": buildUserName, "发布日期": buildDate }