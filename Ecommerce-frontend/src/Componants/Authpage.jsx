import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  IconButton,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { setUser } from "../Hooks/Userinfo";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Simple validators:
const isValidEmail = (value) => {
  // Minimal email pattern: "text@text.text"
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

const isValidPhone = (value) => {
  // Must be exactly 10 digits (adjust as needed)
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(value);
};

export default function AuthDialog({ open, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // For login: "loginInput" = Email or Phone
  // For register: separate fields
  const [formData, setFormData] = useState({
    loginInput: "",
    password: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    confirmPassword: "",
  });

  // Close dialog
  const handleClose = () => {
    if (onClose) onClose();
  };

  // Reset all input fields
  const resetFormData = () => {
    setFormData({
      loginInput: "",
      password: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  // Toggle between Login and Register
  const handleToggle = () => {
    setIsLogin(!isLogin);
    resetFormData(); // <--- Clear form data on switch
  };

  // Update form data and reset any existing errors
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    let newErrors = {};

    if (isLogin) {
      // Validate the "loginInput" for email or phone
      if (!formData.loginInput) {
        newErrors.loginInput = "Email or Phone is required";
      } else if (
        !isValidEmail(formData.loginInput) &&
        !isValidPhone(formData.loginInput)
      ) {
        // If it doesn't match email AND doesn't match phone
        newErrors.loginInput = "Invalid Email or Phone format!";
      }

      // Check password
      if (!formData.password) {
        newErrors.password = "Password is required";
      }

      // If we found errors, show them and STOP
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // If valid, proceed with login request
      setLoading(true);
      try {
        // Decide if it's an email or phone
        const isEmail = isValidEmail(formData.loginInput);
        const payload = isEmail
          ? {
              customer_email: formData.loginInput,
              customer_password: formData.password,
            }
          : {
              customer_phone: formData.loginInput,
              customer_password: formData.password,
            };

        // Example using GET with query params
        const res = await axios.get("http://localhost:1009/customer/auth", {
          params: payload,
        });
        if (!res.data.length) {
          toast.error("Invalid credentials!");
        } else {
          // console.log("Login Successful:", res);
          toast.success("Login Successful!");
          setUser(res.data[0].customer_id);
          setTimeout(() => {
            window.location.reload(); // Reload the page after login
            handleClose();
          }, 2000);
        }
      } catch (err) {
        console.error("API Error:", err);
        toast.error("Invalid credentials!");
      } finally {
        setLoading(false);
      }
    } else {
      // --- REGISTRATION FLOW ---
      // Basic validations
      if (!formData.fullName) {
        newErrors.fullName = "Full Name is required";
      }
      if (!formData.email) {
        newErrors.email = "Email is required";
      }
      if (!formData.password) {
        newErrors.password = "Password is required";
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
      } else if (formData.phone.length !== 10) {
        // or use a regex if you want to ensure digits only:
        // else if (!/^[0-9]{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      }
      if (!formData.address) {
        newErrors.address = "Shipping address is required";
      }

      // If any errors, show them
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // If valid, proceed with register request
      setLoading(true);
      try {
        const payload = {
          customer_name: formData.fullName,
          customer_email: formData.email,
          customer_password: formData.password,
          customer_phone: formData.phone,
          shipping_address: formData.address,
        };

        const res = await axios.post("http://localhost:1009/customer", payload);
        if (!res.data.insertId) {
          toast.error("Registration Failed!");
        } else {
          toast.success("Registration Successful!");
          setUser(res.data.insertId);
          setTimeout(() => {
            window.location.reload(); // Reload the page after login
            handleClose();
          }, 2000);
        }
      } catch (err) {
        console.error("API Error:", err);
        toast.error("Something went wrong. Please try again!");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ position: "relative", textAlign: "center" }}>
          {isLogin ? "Login" : "Register"}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8, color: "grey.600" }}
          >
            <i className="fas fa-times" />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Image Section */}
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <img
                src={isLogin ? "/login.jpeg" : "/login.jpeg"}
                alt={isLogin ? "Login" : "Register"}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                onError={(e) => (e.target.src = "/default-image.png")}
              />
            </Box>

            {/* Form Section */}
            <Box sx={{ width: { xs: "100%", md: "60%" }, p: 4 }}>
              <form onSubmit={handleSubmit}>
                {/* Registration Fields */}
                {!isLogin && (
                  <>
                    <TextField
                      label="Full Name"
                      name="fullName"
                      fullWidth
                      margin="normal"
                      value={formData.fullName}
                      onChange={handleChange}
                      error={!!errors.fullName}
                      helperText={errors.fullName}
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      fullWidth
                      margin="normal"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </>
                )}

                {/* LOGIN Field: "Email or Phone" */}
                {isLogin && (
                  <TextField
                    label="Email or Phone"
                    name="loginInput"
                    type="text"
                    fullWidth
                    margin="normal"
                    value={formData.loginInput}
                    onChange={handleChange}
                    error={!!errors.loginInput}
                    helperText={errors.loginInput}
                  />
                )}

                {/* Password Field (used in both flows) */}
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />

                {/* Registration-Only Fields */}
                {!isLogin && (
                  <>
                    <TextField
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      fullWidth
                      margin="normal"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword}
                    />
                    <TextField
                      label="Phone Number"
                      name="phone"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={formData.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                    />
                    <TextField
                      label="Shipping Address"
                      name="address"
                      fullWidth
                      margin="normal"
                      value={formData.address}
                      onChange={handleChange}
                      error={!!errors.address}
                      helperText={errors.address}
                    />
                  </>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : isLogin ? (
                    "LOGIN"
                  ) : (
                    "REGISTER"
                  )}
                </Button>
              </form>

              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={handleToggle} // <--- Use the toggle function
              >
                {isLogin
                  ? "Create an Account"
                  : "Already have an account? Login"}
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
