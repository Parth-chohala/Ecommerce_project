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
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthDialog() {
  const [open, setOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!isLogin) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required";
      if (!formData.confirmPassword)
        newErrors.confirmPassword = "Confirm Password is required";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
      if (!formData.phone) newErrors.phone = "Phone Number is required";
      if (!formData.address) newErrors.address = "Shipping Address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        if (isLogin) {
          // Add login API call here when needed
          console.log("Logging in...", formData);
        } else {
          const payload = {
            customer_name: formData.fullName,
            customer_email: formData.email,
            customer_password: formData.password,
            customer_phone: formData.phone,
            shipping_address: formData.address,
          };

          await axios
            .post("http://localhost:1009/customer", payload)
            .then((res) => {
              console.log("Registration Successful:", res.data);
              toast.success("Registration Successful!");
              handleClose();
            })
            .catch((err) => {
              console.error("API Error:", err);
              toast.error('Something went wrong. Please try again!');
            });
        }
      } catch (error) {
        console.error("API Error:", error);
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
            <i className="fas fa-times"></i>
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
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
                {!isLogin && (
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
                )}

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
                    "Login"
                  ) : (
                    "Register"
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
                onClick={() => setIsLogin(!isLogin)}
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
