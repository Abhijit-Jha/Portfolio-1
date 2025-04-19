import client from "prom-client"
export const totalNoOfVisitor= new client.Counter({
    name : "TOTAL_NO_OF_USERS",
    help : "total no of users visiting abhijit.website",
    labelNames : ["path"]
})