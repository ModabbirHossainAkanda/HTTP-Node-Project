import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1> Now I am feeling good </h1>");
});
app.get("/about", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>About Me</h1> <p> My name is Hossain</p>");
});
app.get("/contact", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>If need then contact me </h1> <p> phone number : +358469434693");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
