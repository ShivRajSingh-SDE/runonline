const express = require("express");
const User = require("./mongo"); // Import the User model
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define a route for fetching a specific user
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Fetch data for the specified user
    const user = await User.findOne({ _id: `${userId}` });

    if (user) {
      res.json(user);
      console.log("User data retrieved");
    } else {
      res.json("User not found");
      console.log(user);
    }
  } catch (e) {
    res.status(500).json("An error occurred");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      res.json("exist");
      console.log(user, "<-----/login (User found)");
    } else {
      res.json("not exist");
      console.log("User not found or incorrect password");
    }
  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json("An error occurred");
  }
});

app.post("/Signup", async (req, res) => {
  const { email, password, name, pic, department } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      res.json("exist");
    } else {
      await User.create({ email, password, name, pic });
      res.json("not exist");
      console.log("New user created");
    }
  } catch (e) {
    res.status(500).json("An error occurred");
  }
});

// Define a route for fetching all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database

    // console.log(users, "<--- from /users ");
    if (users.length > 0) {
      res.json(users);
    } else {
      res.json("No users found");
    }
  } catch (e) {
    res.status(500).json("An error occurred");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.post("/reset-password", async (req, res) => {
  const { email, password, confirmPassword, otp } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.json("user not found");
    }

    console.log("Stored OTP:", user.resetPasswordOTP);
    console.log("Received OTP:", otp);

    if (!user.resetPasswordOTP) {
      return res.json("stored OTP is undefined");
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.json("passwords do not match");
    }

    // Check if the provided OTP matches the stored OTP
    if (user.resetPasswordOTP.trim() !== otp.trim()) {
      return res.json("invalid OTP");
    }

    // Log the user's current password before the update
    console.log("User's current password:", user.password);

    // Update the user's password
    user.password = password;
    user.resetPasswordOTP = null; // Reset the OTP after successful use
    await user.save();

    // Log the user's password after the update
    console.log("User's new password:", user.password);

    res.json("success");
    console.log("Password reset successful");
  } catch (e) {
    console.error("Error in /reset-password:", e);
    res.status(500).json("An error occurred");
  }
});
app.post("/generate-otp", async (req, res) => {
  const { email } = req.body;

  try {
    // Generate OTP
    const otp = generateOTP();
    console.log("Generated OTP:", otp);

    // Create or update the user with the generated OTP
    // This is just an example, adjust it based on your actual User model
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { resetPasswordOTP: otp, department: "defaultDepartment" } },
      { new: true, upsert: true }
    );

    console.log("User after save:", user);

    // Send OTP to the user's email
    await sendOTPEmail(email, otp);

    res.json("OTP sent successfully");
  } catch (e) {
    console.error("Error in /generate-otp:", e);
    res.status(500).json("An error occurred");
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gitamapptech@gmail.com",
    pass: "ajza yvpi ptur jinv",
  },
});

// Function to send an email with the OTP
const sendOTPEmail = async (to, otp) => {
  try {
    const mailOptions = {
      from: "gitamapptech@gmail.com",
      to,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Generated OTP:", otp);
  return otp;
};
