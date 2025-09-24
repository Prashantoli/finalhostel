import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongodb:27017/nepal_hostel_finder";

console.log("🚀 Nepal Hostel Finder Database Setup");
console.log("=====================================");

async function connectWithRetry(retries = 5, delay = 3000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("✅ Connected to MongoDB");
      return;
    } catch (err) {
      console.error(`❌ Connection attempt ${attempt} failed. Retrying in ${delay / 1000}s...`);
      if (attempt === retries) throw err;
      await new Promise(res => setTimeout(res, delay));
    }
  }
}

(async () => {
  try {
    await connectWithRetry();

    // Add seed data here if needed

    console.log("✅ Database setup complete");
    process.exit(0);
  } catch (err) {
    console.error("❌ Database setup failed:", err);
    process.exit(1);
  }
})();
