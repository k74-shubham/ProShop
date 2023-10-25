import User from "../model/user-schema.js";

export const userSignup = async (req, res) => {
    try {
        const data = req.body;

        const exist = await User.findOne({ username: data.username });
        if (exist) {
            return res.status(401).json({ message: "Username already exist" })
        }

        const newUser = new User(data);
        await newUser.save();

        res.status(200).json({ message: data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const userLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({ username: username, password: password });
        if (user) {
            return res.status(200).json({ user: user })
        }
        else {
            res.status(401).json(`Invalid login`)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}