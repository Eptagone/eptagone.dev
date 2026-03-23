// Increase the version number in `version.txt`.

import { exec } from "child_process";
import fs from "fs";
import path from "path";

const versionFilePath = path.resolve(process.cwd(), "version.txt");
const versionContent = fs.readFileSync(versionFilePath, {
    encoding: "utf-8",
});

const semverRegex = /(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)/;
const matches = versionContent.match(semverRegex);
if (!matches) {
    throw new Error("Invalid version number in `version.txt`: " + versionContent);
}

const files = process.argv.slice(2);
if (!files.find(file => file === "version.txt")) {
    const patch = Number(matches.groups!.patch) + 1;
    const newVersion = `${matches.groups!.major}.${matches.groups!.minor}.${patch}`;
    const newVersionContent = versionContent.replace(semverRegex, newVersion);
    fs.writeFileSync(versionFilePath, newVersionContent, { encoding: "utf-8" });
    exec(`git add version.txt`);
    console.log(`New version number is '${newVersion}'.`);
}
