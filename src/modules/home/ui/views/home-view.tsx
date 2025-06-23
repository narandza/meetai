"use client";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export const HomeView = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <div>
      <p>Logged in as {session?.user.name}</p>

      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.push("/sign-in"),
            },
          })
        }
      >
        Sign out
      </Button>
    </div>
  );
};
