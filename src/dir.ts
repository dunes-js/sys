import { existsSync } from "fs";
import { readdir, rm } from "fs/promises";
import { join } from "path";

export async function cleanDir(name: string)
{
  for (const fileName of await readdir(name))
  {
    await rm(join(name, fileName), {recursive: true})
  }
}

export async function safeCleanDir(name: string)
{
  if (existsSync(name))
  {
    await cleanDir(name);
  }
}