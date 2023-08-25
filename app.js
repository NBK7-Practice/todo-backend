import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

// const express = require("express")
const app = express();


//사용할 미들웨어 세팅
app.use(express.json());
app.use(cors());