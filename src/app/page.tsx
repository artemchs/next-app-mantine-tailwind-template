import { AppShell, AppShellHeader, AppShellMain, Group } from "@mantine/core";
import Image from "next/image";
import { Demo } from "./Demo";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <Demo />
      </AppShellMain>
    </AppShell>
  );
}
