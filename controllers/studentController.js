exports.index = (req,res) => {
    res.send("Welcome to MCA students API \n");
};

exports.show = (req,res) => {
    res.send(`SHowing data for ID: ${req.params.id}\n`);
};

exports.store = (req,res) => {
    res.send(`Data received: ${req.body.name}, ${req.body.city} \n`);
};

exports.update = (req,res) => {
    res.send(`Data updated for ID: ${req.params.id}, Name: ${req.body.name} \n`);
};

exports.delete = (req,res) => {
    res.send(`Data deleted for ID: ${req.params.id}\n`);
};