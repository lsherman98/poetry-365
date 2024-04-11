const router = require("express").Router();
let Poem = require("../../models/poem.model");

router.route("/").get((req, res) => {
    Poem.find()
        .then((poems) => res.json(poems))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    const { id } = req.params;

    Poem.findById(id)
        .then((poem) => {
            const formattedPoem = poem.poem
            .replace(/\\n/g, '\n')  
            .replace(/\\t/g, '\t')  
            .replace(/\\s/g, '\s');  

            poem.poem = formattedPoem
            res.json(poem);
        })
        .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/").post((req, res) => {
    const { title, year, author, read_by, poem, audio, day } = req.body;

    const formattedPoem = poem
        .replace(/\\n/g, "\n")
        .replace(/\\t/g, "\t")
        .replace(/\\s/g, " ");

    const newPoem = new Poem({
        title,
        year,
        author,
        read_by,
        poem: formattedPoem,
        audio,
        day,
    });

    newPoem
        .save()
        .then(() => res.status(200).json("Poem added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
