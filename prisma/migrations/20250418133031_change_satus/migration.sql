/*
  Warnings:

  - The values [PENDING,IN_PROGRESS,DONE] on the enum `ServiceStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ServiceStatus_new" AS ENUM ('pending', 'in-progress', 'done');
ALTER TABLE "ServiceRecord" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "ServiceRecord" ALTER COLUMN "status" TYPE "ServiceStatus_new" USING ("status"::text::"ServiceStatus_new");
ALTER TYPE "ServiceStatus" RENAME TO "ServiceStatus_old";
ALTER TYPE "ServiceStatus_new" RENAME TO "ServiceStatus";
DROP TYPE "ServiceStatus_old";
ALTER TABLE "ServiceRecord" ALTER COLUMN "status" SET DEFAULT 'pending';
COMMIT;

-- AlterTable
ALTER TABLE "ServiceRecord" ALTER COLUMN "status" SET DEFAULT 'pending';
