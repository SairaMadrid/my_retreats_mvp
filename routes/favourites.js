require("dotenv").config()
var express = require("express")
var router = express.Router()
const axios = require("axios")
//let userShouldBeLoggedIn = require("../guard/userShouldBeLoggedIn");
const db = require("../model/helper")
