import "dotenv/config";
import * as cron from "node-cron";

const softwareWatch = cron;

const task = () => {

}

// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *

softwareWatch.schedule("0 0 * * *", task); //Everyday at 00:00 AM