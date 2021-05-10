const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const product = require('./../models/compare').product;
const compare = require('./../models/compare').compare;


// Load input validation
const validateRegisterInput = require("./../validations/register");
const validateLoginInput = require("./../validations/login");

// Load User model
const User = require("./../models/user");

// Register Router
router.post("/register", (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log(req.body.email);
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // Hash Password
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) =>
              res.status(201).json({
                user,
              })
            )
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// Login User

router.post("/login", (req, res) => {
  const { isValid, errors } = validateLoginInput(req.body);
  console.log(errors, "in login api");
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log("in login api");

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email address is not registered" });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Please provide a correct password" });
      } else {
        //   Create JWT payload
        const payload = {
          id: user._id,
          name: user.name,
        };

        // Sign Token
        jwt.sign(
          payload,
          process.env.secretOrKey,
          { expiresIn: 36000 },
          (err, token) => {
            if (err) throw err;
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      }
    });
  });
});

router.post("/save", (req, res) => {
  const { productsArray, userId } = req.body;
  console.log(req.body);
  const products = [];
  productsArray.forEach(prod => {
    const prodObj = new product({
      brand: prod.brand,
      name: prod.name,
      price: prod.price,
      rating: prod.rating,
      image: prod.image,
      link: prod.link,
    })
    products.push(prodObj);
  })

  const newCompareObj = new compare({
    userId: userId,
    products: products
  })

  newCompareObj.save().then(response => {
    return res.status(201).send({
      message: "Comparison saved successully",
    })
  }).catch(err => {
    return res.status(400).send({
      message: "Failed to saved comparison",
    })
  })
})


router.post('/comparisons', (req, res) => {
  const { userId } = req.body;
  compare.find({ userId: userId }).then(comparisons => {
    console.log(comparisons)
    return res.status(200).send({
      data: comparisons
    })
  }).catch(err => {
    console.log(err);
    return res.status(400).send({
      error: "Something went wrong.Please try again."
    })
  })
})

module.exports = router;
