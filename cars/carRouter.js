const express = require("express");
const db = require("../data/db-config");

const router = express.Router();
router.use("/:id", validateId);

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "error retrieving cars" });
    });
});

router.get("/:id", (req, res) => {
  //   const { id } = req.params;
  //   db("cars")
  //     .where({ id })
  //     .then(car => {
  //       res.json(car);
  //     })
  //     .catch(err => {
  //       res.status(500).json({ message: "failed to retrieve the car" });
  //     });

  res.status(200).json(req.car);
});

// .where({ id: newCar[0] })

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(newCar => {
      console.log("new car: ", newCar);
      db("cars")
        // .where({ id: newCar[0] })
        .where("id", newCar[0])
        .then(newCarEntry => {
          res.status(201).json(`New Car ${newCarEntry[0].make} has been added`);
        });
    })
    .catch(err => {
      res.status(500).json({ message: "failed to add new car" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.car[0];
  db("cars")
    .where("id", id)
    .del()
    .then(rowDeleted => {
      res.status(200).json(`${rowDeleted} car record has been deleted`);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to delete the car" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.car[0];
  const newData = req.body;
  db("cars")
    .where("id", id)
    .update(newData)
    .then(updatedCar => {
      res.status(200).json(`${updatedCar} car has been updated`);
    })
    .catch(err => {
      res.status(500).json({ message: "error updating car" });
    });
});

function validateId(req, res, next) {
  const { id } = req.params;
  db("cars")
    .where("id", id)
    .then(car => {
      if (car.length > 0) {
        req.car = car;
        next();
      } else {
        res.status(404).json({ message: "invalid user id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "exception", err });
    });
}

module.exports = router;
