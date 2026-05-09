import React from "react";
import { useNavigate } from "react-router-dom";

const Page112 = () => {
  const navigate = useNavigate();

  // Example stats (replace with real data / props / API later)
  const stats = {
    totalBookings: 120,
    availableRooms: 35,
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#333",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
    },
    card: {
      borderRadius: "10px",
      color: "#fff",
      padding: "20px",
      cursor: "pointer",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.2s",
    },
    cardTitle: {
      fontSize: "18px",
      marginBottom: "10px",
    },
    cardValue: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Admin Dashboard</h1>
      <div style={styles.cardGrid}>
        <div
          style={{ ...styles.card, backgroundColor: "#4e73df" }}
          onClick={() => navigate("/admin/bookings")}
        >
          <h3 style={styles.cardTitle}>Total Bookings</h3>
          <p style={styles.cardValue}>{stats.totalBookings}</p>
        </div>

        <div
          style={{ ...styles.card, backgroundColor: "#1cc88a" }}
          onClick={() => navigate("/admin/rooms")}
        >
          <h3 style={styles.cardTitle}>Available Rooms</h3>
          <p style={styles.cardValue}>{stats.availableRooms}</p>
        </div>
      </div>
    </div>
  );
};

export default Page112;
