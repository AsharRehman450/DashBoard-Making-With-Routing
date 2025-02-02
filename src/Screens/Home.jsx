import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GiShoppingBag, GiThreeFriends } from "react-icons/gi";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import "./Home.css";

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.5 } 
  }
};

const Home = ({ products = [] }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="home-container"
    >
      <header className="home-header">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SpaceDashboardIcon className="dashboard-icon" />
          <h1 className="home-title">Dashboard Overview</h1>
          <p className="home-subtitle">Streamline Your Data</p>
        </motion.div>
      </header>

-      <div className="stats-container">
        <motion.div 
          className="stat-card products-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <GiShoppingBag className="stat-icon" />
          <h3>Total Products</h3>
          <p className="stat-value">{products.length}</p>
          <span className="stat-trend">📈 +17% growth</span>
        </motion.div>

        <motion.div 
          className="stat-card users-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <GiThreeFriends className="stat-icon" />
          <h3>Active Users</h3>
          <p className="stat-value">1,450</p>
          <span className="stat-trend">📈 +9% this month</span>
        </motion.div>
      </div>

      <div className="actions-container">
        <h2 className="section-title">Instant Actions</h2>
        <div className="action-buttons">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="action-btn action-products"
            onClick={() => navigate("/products")}
          >
            <GiShoppingBag className="action-icon" />
            Manage Products
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="action-btn action-users"
            onClick={() => navigate("/users")}
          >
            <GiThreeFriends className="action-icon" />
            View Users
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="action-btn action-github"
            onClick={() => navigate("/github-finder")}
          >
            <FaGithub className="action-icon" />
            GitHub Finder
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
