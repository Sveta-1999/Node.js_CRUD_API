const express = require('express');
const router = express.Router();

const { isValidEmail, isValidPhoneNumber, isValidGender, isValidAge } = require('../util/validationUtils');

const { User } = require('../models/user');


//Get All Users
router.get('/api/users', (req, res) => {
    User.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    });
}); 


//Save User
router.post('/api/user/add', async (req, res) => {
    try {
        const { name, surname, age, email, phoneNumber, gender, nationality, livingCountry } = req.body;
  
        // Check if the email is valid
        if (!isValidEmail(email)) {
            return res.status(400).json({
                code: 400,
                message: 'Invalid email format'
            });
        }
  
        // Check if the phone number is valid
        if (!isValidPhoneNumber(phoneNumber)) {
            return res.status(400).json({
                code: 400,
                message: 'Invalid phone number format'
            });
        }
  
        // Check if the gender is valid
        if (!isValidGender(gender)) {
            return res.status(400).json({
                code: 400,
                message: 'Invalid gender value'
            });
        }
  
        // Check if the age is valid
        if (!isValidAge(age)) {
            return res.status(400).json({
                code: 400,
                message: 'Invalid age value'
            });
        }
  
        const emp = new User({
            name,
            surname,
            age,
            email,
            phoneNumber,
            gender,
            nationality,
            livingCountry
        });
  
        const savedData = await emp.save();
  
        res.status(200).json({
            code: 200,
            message: 'User added successfully',
            addUser: savedData
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            message: 'An error occurred while adding the user'
        });
    }
});


//Get Single User
router.get('/api/user/:id', (req, res) => {
    User.findById(req.params.id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the user');
    });
});  


//Update User
router.put('/api/user/edit/:id', (req, res) => {
    const { name, surname, age, email, phoneNumber, gender, nationality, livingCountry } = req.body;
  
    const emp = {
        name,
        surname,
        age,
        email,
        phoneNumber,
        gender,
        nationality,
        livingCountry
    };
  
    User.findByIdAndUpdate(req.params.id, emp, { new: true })
        .then(data => {
            res.status(200).json({
                code: 200,
                message: 'User updated successfully',
                updateUser: data
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 500,
                message: 'An error occurred while updating the user'
            });
        });
});


//Delete User
router.delete('/api/user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(data => {
        res.status(200).json({
          code: 200,
          message: 'User deleted successfully',
          deleteUser: data
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          code: 500,
          message: 'An error occurred while deleting the user'
        });
      });
});


//Delete All Users
router.delete('/api/user', (req, res) => {
    User.deleteMany({})
    .then(result => {
        res.status(200).json({
            code: 200,
            message: 'All ssers deleted successfully',
            deletedCount: result.deletedCount
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            code: 500,
            message: 'An error occurred while deleting all users'
        });
    });
});


// Delete users with the same name
router.delete('/api/user/delete/:name', async (req, res) => {
    const nameToDelete = req.params.name;
  
    try {
        // Find users with the same name
        const usersToDelete = await User.find({ name: nameToDelete });
  
        if (usersToDelete.length === 0) {
            return res.status(404).json({
                code: 404,
                message: 'No users found with the given name'
            });
        }
        
        // Delete users 
        const deleteResult = await User.deleteMany({ name: nameToDelete });
  
        res.status(200).json({
            code: 200,
            message: 'Users with the same name deleted successfully',
            deleteCount: deleteResult.deletedCount
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            message: 'An error occurred while deleting users with the same name'
        });
    }
});
  

module.exports = router;