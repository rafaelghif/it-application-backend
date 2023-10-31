import { Router } from "express";
import authenticationRouter from "./authentication.js";
import departmentRouter from "./department.js";
import userRouter from "./user.js";
import phoneRouter from "./phone.js";
import locationRouter from "./location.js";
import personalComputerRouter from "./personalComputer.js";
import operatingSystemRouter from "./operatingSystem.js";
import diskDriveRouter from "./diskDrive.js";
import networkAdapterRouter from "./networkAdapter.js";
import physicalMemoryRouter from "./physicalMemory.js";
import categoryRouter from "./category.js";
import subCategoryRouter from "./subCategory.js";
import softwareRouter from "./software.js";
import computerSoftwareRouter from "./computerSoftware.js";

const router = Router();

router.use("/authentication", authenticationRouter);
router.use("/department", departmentRouter);
router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/sub-category", subCategoryRouter);
router.use("/phone", phoneRouter);
router.use("/location", locationRouter);
router.use("/personal-computer", personalComputerRouter);
router.use("/operating-system", operatingSystemRouter);
router.use("/disk-drive", diskDriveRouter);
router.use("/network-adapter", networkAdapterRouter);
router.use("/physical-memory", physicalMemoryRouter);
router.use("/software", softwareRouter);
router.use("/computer-software", computerSoftwareRouter);

export default router;