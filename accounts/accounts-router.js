const express = require("express");
const db = require("../data/dbConfig");
const router = express.Router();

// router.get('/', (req, res) => {
//   db('accounts')
//     .then(result => {
//       console.log(result)
//       res.json(result)
//     })
//     .catch(error => {
//       res.status(500).json({ message: 'error' + error.message})
//     })
// });

router.get("/", async (req, res) => {
  try {
    const allAccounts = await db("accounts");
    res.json(allAccounts);
  } catch (error) {
    res.status(500).json({ message: "error" + error.message });
  }
});

// router.get("/:id", (req, res) => {
//   db("accounts")
//     .where({ id: req.params.id })
//     .then(result => {
//       console.log(result);
//       res.json(result[0]);
//     })
//     .catch(error => {
//       res.status(500).json({ message: "error" + error.message });
//     });
// });

router.get("/:id", async (req, res) => {
  try {
    const account = await db("accounts").where({ id: req.params.id });
    res.json(account[0]);
  } catch (error) {
    res.status(500).json({ message: "error" + error.message });
  }
});

// router.post("/", (req, res) => {
//   db("accounts")
//     .insert({
//       name: req.body.name,
//       budget: req.body.budget
//     })
//     .then(newEntry => {
//       res.json("New entry has ID of: " + newEntry);
//     })
//     .catch(error => {
//       res.status(500).json({ message: "error" + error.message });
//     });
// });

router.post("/", async (req, res) => {
  try {
    const newAccount = await db("accounts").insert({
      name: req.body.name,
      budget: req.body.budget
    });
    res.json("New entry has ID of: " + newAccount);
  } catch (error) {
    res.status(500).json({ message: "error" + error.message });
  }
});

// router.put("/:id", (req, res) => {
//   db("accounts")
//     .where({ id: req.params.id })
//     .update({
//       name: req.body.name,
//       budget: req.body.budget
//     })
//     .then(updatedEntry => {
//       console.log(updatedEntry);
//       res.json("Number of updated entries: " + updatedEntry);
//     })
//     .catch(error => {
//       res.status(500).json({ message: "error" + error.message });
//     });
// });

router.put("/:id", async (req, res) => {
  try {
    const editedAccount = await db("accounts")
      .where({ id: req.params.id })
      .update({
        name: req.body.name,
        budget: req.body.budget
      });
    res.json("Number of updated entries: " + editedAccount);
  } catch (error) {
    res.status(500).json({ message: "error" + error.message });
  }
});

// router.delete("/:id", (req, res) => {
//   db("accounts")
//     .where({ id: req.params.id })
//     .delete()
//     .then(deleted => {
//       console.log(deleted);
//       res.json("Number of records deleted: " + deleted);
//     })
//     .catch(error => {
//       res.status(500).json({ message: "error" + error.message });
//     });
// });

router.delete("/:id", async (req, res) => {
  try {
    const deletedAccount = await db("accounts")
      .where({ id: req.params.id })
      .delete();
      res.json("Number of records deleted: " + deletedAccount)
  } catch (error) {
    res.status(500).json({ message: "error" + error.message });
  }
});

module.exports = router;
