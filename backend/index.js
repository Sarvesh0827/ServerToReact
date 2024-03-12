import express from'express' ;
const app= express();


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
          "id": 1,
          "title": "A Classic",
          "content": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
          "id": 2,
          "title": "A Programmer's Joke",
          "content": "How many programmers does it take to change a light bulb? None, that's a hardware problem."
        },
        {
          "id": 3,
          "title": "A Quantum Joke",
          "content": "A neutron walks into a bar and asks for a drink. How much will that be? For you, no charge."
        },
        {
          "id": 4,
          "title": "A Financial Joke",
          "content": "Why did the scarecrow become a successful banker? Because he was outstanding in his field."
        },
        {
          "id": 5,
          "title": "A Classic Kid's Joke",
          "content": "Why was six scared of seven? Because seven eight nine."
        },
        {
          "id": 6,
          "title": "A Time Travel Joke",
          "content": "I'm reading a book on anti-gravity. It's impossible to put down."
        },
        {
          "id": 7,
          "title": "A Food Joke",
          "content": "I told my wife she should embrace her mistakes. She gave me a hug."
        }
      ];
      res.send(jokes);
      
})

const port = process.env.PORT || 5454;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})