const mongoose = require("mongoose");

// Define the ProfessionalExperience sub-schema
const professionalExperienceSchema = new mongoose.Schema({
  companyName: { type: String },
  jobTitle: { type: String },
  jobDescription: { type: String },
  durationOfWork: { type: String },
  additionalDetails: { type: String },
});

// Define the Projects sub-schema
const projectsSchema = new mongoose.Schema({
  projectName: { type: String },
  role: { type: String },
  organizationName: { type: String },
  dateRange: { type: String },
  projectDescription: { type: String },
});

// Define the Education sub-schema
const educationSchema = new mongoose.Schema({
  schoolName: { type: String },
  programName: { type: String },
  dateRange: { type: String },
  specialization: { type: String },
  Performance: { type: String },
});

// Define the Skills sub-schema
const skillsSchema = new mongoose.Schema({
  skillName: { type: String },
});

// Define the Achievements sub-schema
const achievementsSchema = new mongoose.Schema({
  achievementName: { type: String },
  additionalDetails: { type: String },
});

// Define the main user data schema
const userDataSchema = new mongoose.Schema({
  name: { type: String },
  expertise: { type: String },
  location: { type: String },
  phone: { type: String },
  email: { type: String },
  profileLink: { type: String },
  impactICreate: { type: String },
  professionalExperience: [professionalExperienceSchema], // Array of ProfessionalExperience
  projects: [projectsSchema], // Array of Projects
  education: [educationSchema], // Array of Education
  skills: [skillsSchema], // Array of Skills
  tools: [String], // Array of tools (assuming tools is a string array)
  achievements: [achievementsSchema], // Array of Achievements
});

// Create the model
const UserData = mongoose.model("UserData", userDataSchema);

module.exports = { UserData };
