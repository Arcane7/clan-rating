const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/members', (req, res) => {
    res.send({
        members:
            [{name: 'SSSS', race: 'Z'},
                {name: 'DDDDD', race: 'T'},
                {name: 'VVVVV', race: 'P'}]
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
