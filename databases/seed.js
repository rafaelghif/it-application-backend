import models from "../models/index.js"

export const initialValue = async () => {
    const department = await models.Department.create({
        name: "Process Engineering Department",
        abbreviation: "PED",
        createdBy: "40703191",
        updatedBy: "40703191"
    });

    await models.User.create({
        badgeId: "40703191",
        password: "abcd1234;",
        email: "Muhammad.Rafael@yokogawa.com",
        name: "Muhammad Rafael Ghifari",
        role: "Super User",
        createdBy: "40703191",
        updatedBy: "40703191",
        DepartmentId: department.id
    });
}