import express from "express"
import con from '../Environments/db.js'
import jwt from 'jsonwebtoken'


const router = express.Router()

router.post('/adminlogin',(req,res) => {
    const sql = "SELECT * FROM admin WHERE email = ? and password = ?"
    con.query(sql,[req.body.email, req.body.password], (err, result) => {
        if(err) return res.json({loginStatus: false, Error:"Query error"})
        if(result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign(
                {role: "admin", email: email},
                "jwt_secret_key", {expiresIn: '1h'}
            );
            res.cookie('token', token)
            return res.json({loginStatus: true});
        }
        else {
            return res.json({loginStatus: false,Error:"Wrong email or password"});
        }
    });
});

router.get('/category',(req,res) => {
    const sql = "SELECT *FROM category";
    con.query(sql, [req.body.category], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" });
        return res.json({ Status: true, Result: result });
    });
})
router.post('/add_category', (req, res) => {
    const sql = "INSERT INTO category (`name`) VALUES (?)";
    con.query(sql, [req.body.category], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" });
        return res.json({ Status: true });
    });
});

router.post('/add_employee', (req, res) => {
    const sql = "INSERT INTO `employee` SET ?";
    con.query(sql, req.body.employee, (err, result) => {
        console.log(req.body.employee);
        if (err) {
            console.error('SQL Error:', err);
            return res.json({ Status: false, Error: `Query Error: ${err.message}` });
        }
        return res.json({ Status: true });
    });
});

router.get('/employee',(req,res) => {
    const sql = "SELECT *FROM employee";
    con.query(sql, [req.body.employee], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" });
        return res.json({ Status: true, Result: result });
    });
})

export {router as adminRouter}