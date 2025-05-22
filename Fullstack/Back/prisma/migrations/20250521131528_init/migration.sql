-- CreateTable
CREATE TABLE "Institution" (
    "inst_ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("inst_ID")
);

-- CreateTable
CREATE TABLE "Admin" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "institutionID" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Hierarchy" (
    "hier_ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hierarchy_pkey" PRIMARY KEY ("hier_ID")
);

-- CreateTable
CREATE TABLE "Person" (
    "person_ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "institutionID" TEXT NOT NULL,
    "hierarchyID" INTEGER NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("person_ID")
);

-- CreateTable
CREATE TABLE "Type_Devices" (
    "type_ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_Devices_pkey" PRIMARY KEY ("type_ID")
);

-- CreateTable
CREATE TABLE "Device" (
    "device_ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "typeID" INTEGER NOT NULL,
    "institutionID" TEXT NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("device_ID")
);

-- CreateTable
CREATE TABLE "Activity" (
    "activity_ID" SERIAL NOT NULL,
    "dateTime_in" TIMESTAMP(3) NOT NULL,
    "dateTime_out" TIMESTAMP(3) NOT NULL,
    "institutionID" TEXT NOT NULL,
    "personID" INTEGER NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("activity_ID")
);

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_institutionID_fkey" FOREIGN KEY ("institutionID") REFERENCES "Institution"("inst_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_institutionID_fkey" FOREIGN KEY ("institutionID") REFERENCES "Institution"("inst_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_hierarchyID_fkey" FOREIGN KEY ("hierarchyID") REFERENCES "Hierarchy"("hier_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_typeID_fkey" FOREIGN KEY ("typeID") REFERENCES "Type_Devices"("type_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_institutionID_fkey" FOREIGN KEY ("institutionID") REFERENCES "Institution"("inst_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_institutionID_fkey" FOREIGN KEY ("institutionID") REFERENCES "Institution"("inst_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_personID_fkey" FOREIGN KEY ("personID") REFERENCES "Person"("person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
