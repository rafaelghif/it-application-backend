import connectionDatabase from "../configs/database.js";
import { initialValue } from "../databases/seed.js";
import Department from "./Department.js";
import Location from "./Location.js";
import OperatingSystem from "./OperatingSystem.js";
import PersonalComputer from "./PersonalComputer.js";
import PhysicalMemory from "./PhysicalMemory.js";
import Phone from "./Phone.js";
import User from "./User.js";
import DiskDrive from "./DiskDrive.js";
import NetworkAdapter from "./NetworkAdapter.js";
import SubCategory from "./SubCategory.js";
import Category from "./Category.js";
import Software from "./Software.js";
import PersonalComputerHistory from "./PersonalComputerHistory.js";
import ComputerSoftware from "./ComputerSoftware.js";

const models = {};

models.User = User;
models.Category = Category;
models.SubCategory = SubCategory;
models.Department = Department;
models.Phone = Phone;
models.Location = Location;
models.PersonalComputer = PersonalComputer;
models.PersonalComputerHistory = PersonalComputerHistory;
models.OperatingSystem = OperatingSystem;
models.PhysicalMemory = PhysicalMemory;
models.DiskDrive = DiskDrive;
models.NetworkAdapter = NetworkAdapter;
models.Software = Software;
models.ComputerSoftware = ComputerSoftware;

// connectionDatabase.sync({ force: true }).then(async () => {
//     await initialValue();
// });

connectionDatabase.sync();

models.Department.hasMany(models.User, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.User.belongsTo(models.Department, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.Department.hasMany(models.Phone, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.Phone.belongsTo(models.Department, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.Department.hasMany(models.Location, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.Location.belongsTo(models.Department, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.Department.hasMany(models.PersonalComputer, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.PersonalComputer.belongsTo(models.Department, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.Location.hasMany(models.PersonalComputer, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.PersonalComputer.belongsTo(models.Location, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.PersonalComputer.hasOne(models.OperatingSystem, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.OperatingSystem.belongsTo(models.PersonalComputer, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.PersonalComputer.hasMany(models.PhysicalMemory, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.PhysicalMemory.belongsTo(models.PersonalComputer, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.PersonalComputer.hasMany(models.DiskDrive, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.DiskDrive.belongsTo(models.PersonalComputer, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.PersonalComputer.hasMany(models.NetworkAdapter, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.NetworkAdapter.belongsTo(models.PersonalComputer, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.Category.hasMany(models.SubCategory, { onUpdate: "CASCADE", onDelete: "CASCADE" });
models.SubCategory.belongsTo(models.Category, { onUpdate: "CASCADE", onDelete: "CASCADE" });

models.PersonalComputer.hasMany(models.PersonalComputerHistory);
models.PersonalComputerHistory.belongsTo(models.PersonalComputer);

models.PersonalComputer.belongsToMany(models.Software, { through: models.ComputerSoftware, onUpdate: "CASCADE", onDelete: "CASCADE" });
models.Software.belongsToMany(models.PersonalComputer, { through: models.ComputerSoftware, onUpdate: "CASCADE", onDelete: "CASCADE" });

export default models;